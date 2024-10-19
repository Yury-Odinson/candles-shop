import React from "react";
import {CirclePlus} from "lucide-react";
import {Button} from "@/components/ui";
import Link from "next/link";
import {ProductRenderClient} from "../../../services/types";
import {useCartStore} from "@/store/cart";
import toast from "react-hot-toast";

export const Card: React.FC<ProductRenderClient> = ({name, description, imageUrl, id, price}) => {

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
        <article className="flex flex-col justify-between bg-secondary rounded-2xl min-w-[200px]" id={`card_${id}`}>

            <Link href={"/product/" + id}>
                <div>
                    <p className="p-4 text-2xl font-bold">{name}</p>
                    <img className="w-full h-[350px]" src={imageUrl} alt={name}/>
                    <p className="mt-2 p-2 text-justify indent-5">{description}</p>
                </div>
            </Link>

            <div className="flex mt-5 justify-between">
                <p className="text-2xl font-bold pl-4">{price} р.</p>

                <Button variant="default" className="flex gap-2 w-48" onClick={() => onAddProduct(id)}
                        loading={loading}>
                    <span>Добавить в корзину</span>
                    <CirclePlus/>
                </Button>

            </div>

        </article>
    );
};
