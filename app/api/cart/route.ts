import {NextRequest, NextResponse} from "next/server";
import {prisma} from "../../../prisma/prisma-client";
import crypto from "crypto";
import {findOrCreateCart} from "@/lib/find-or-create-cart";
import {CreateCartItemValues} from "../../../services/types";
import {updateCartTotalAmount} from "@/lib/update-cart-total-amount";

export async function GET(req: NextRequest) {

    try {

        const token: string | undefined = req.cookies.get("cartToken")?.value;

        if (!token) {
            return NextResponse.json({totalAmount: 0, items: []});
        }

        const userCart = await prisma.cart.findFirst({
            where: {
                OR: [
                    {
                        token,
                    },
                ],
            },
            include: {
                items: {
                    orderBy: {
                        createdAt: "desc",
                    },
                    include: {
                        product: true,
                    },
                },
            },
        });

        return NextResponse.json(userCart);
    } catch (error) {
        console.log("[CART_GET] Server error", error);
        return NextResponse.json({message: "Не удалось получить корзину"}, {status: 500});
    }
}

export async function POST(req: NextRequest) {
    try {
        let token: string | undefined = req.cookies.get("cartToken")?.value;

        if (!token) {
            token = crypto.randomUUID();
        }

        const userCart = await findOrCreateCart(token);

        const data = (await req.json()) as CreateCartItemValues;

        const findCartItem = await prisma.cartItem.findFirst({
            where: {
                cartId: userCart.id,
                productId: data.productId
            }
        });

        if (findCartItem) {
            await prisma.cartItem.update({
                where: {
                    id: findCartItem.id
                },
                data: {
                    quantity: findCartItem.quantity + 1
                }
            });
        } else {
            await prisma.cartItem.create({
                data: {
                    cartId: userCart.id,
                    productId: data.productId,
                    quantity: 1
                }
            });
        }

        const updatedUserCart = await updateCartTotalAmount(token);

        const response = NextResponse.json(updatedUserCart);
        response.cookies.set("cartToken", token);
        return response;

    } catch (error) {
        console.log("[CART_DELETE] Server error", error);
        return NextResponse.json({message: "Не удалось создать корзину"}, {status: 500});
    }
}

