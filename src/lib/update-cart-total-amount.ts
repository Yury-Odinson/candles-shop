import {prisma} from "../../prisma/prisma-client";
import {calcCartItemTotalPrice} from "@/lib/calc-cart-item-total-price";

export const updateCartTotalAmount = async (token: string) => {
    const userCart = await prisma.cart.findFirst({
        where: {
            token
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

    if (!userCart) {
        return 0;
    }

    const totalAmount = userCart.items.reduce((acc, cur) => acc + calcCartItemTotalPrice(cur), 0);

    return await prisma.cart.update({
        where: {
            id: userCart.id
        },
        data: {
            totalAmount
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
};
