"use client";

import {Button} from "@/components/ui";
import {CirclePlus} from "lucide-react";
import React from "react";
import {Product} from "../../../services/types";
import {cn} from "@/lib/utils";
import {useCartStore} from "@/store/cart";
import toast from "react-hot-toast";

interface Props {
    product: Product;
    className?: string;
}

export const ProductItemPage: React.FC<Props> = ({product, className}) => {

    const addCartItem = useCartStore(state => state.addCartItem);
    const loading = useCartStore(state => state.loading);

    const onAddProduct = async (productItemId: number) => {
        try {
            await addCartItem({
                productId: productItemId
            });
            toast.success("Добавлено в корзину");
        } catch (error) {
            toast.error("Не удалось добавить в корзину");
            console.error(error);
        }
    };

    return (
        <article className={cn("mx-auto p-4 flex flex-wrap gap-6 max-w-[1440px]", [className])}>

            <div className="flex flex-1 items-center justify-center min-w-[300px]">
                <img className="object-contain rounded-2xl max-h-[400px]" src={product.imageUrl}
                     alt={product.name}/>
            </div>

            <div className="flex flex-1 min-w-[300px] flex-col gap-2">
                <p className="text-2xl font-bold">{product.name}</p>
                <p className="flex-1 text-justify indent-5 text-xl">{product.description}</p>

                <div className="flex items-center justify-end gap-6 ">
                    <span className="ml-auto text-2xl font-bold">{product.price} руб.</span>
                    <Button variant="default" className="flex gap-2 w-48" onClick={() => onAddProduct(product.id)}
                            loading={loading}>
                        <span>Добавить в корзину</span>
                        <CirclePlus/>
                    </Button>
                </div>

            </div>
        </article>
    );
};
