import React from "react";
import {Plus} from "lucide-react";
import {Button} from "@/components/ui";
import Link from "next/link";
import {ProductRenderClient} from "../../../services/types";
import {useCartStore} from "@/store/cart";

export const Card: React.FC<ProductRenderClient> = ({name, description, imageUrl, id, price}) => {

    const addCartItem = useCartStore(state => state.addCartItem);

    const onAddProduct = () => {
        addCartItem({
            productId: id
        });
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

                <Button variant="outline" className="flex gap-2 font-bold" onClick={onAddProduct}>
                    <Plus/>
                    <span>Добавить </span>
                </Button>

            </div>

        </article>
    );
};
