"use client";

import {Button} from "@/components/ui";
import {CirclePlus} from "lucide-react";
import React from "react";
import {ProductRenderClient} from "../../../services/types";
import {cn} from "@/lib/utils";

interface Props extends ProductRenderClient {
    className?: string;
}

export const ProductItemPage: React.FC<Props> = ({name, imageUrl, description, price, className}) => {

    return (
        <article className={cn("mx-auto p-4 flex flex-wrap gap-6 max-w-[1440px]", [className])}>

            <div className="flex flex-1 items-center justify-center min-w-[300px]">
                <img className="object-contain rounded-2xl max-h-[400px]" src={imageUrl}
                     alt={name}/>
            </div>

            <div className="flex flex-1 min-w-[300px] flex-col gap-2">
                <p className="text-2xl font-bold">{name}</p>
                <p className="flex-1 text-justify indent-5 text-xl">{description}</p>

                <div className="flex items-center justify-end gap-6 ">
                    <span className="ml-auto text-2xl font-bold">{price} руб.</span>
                    <Button variant="default" className="flex gap-2" onClick={() => {
                    }}>
                        <span>Добавить в корзину</span>
                        <CirclePlus/>
                    </Button>
                </div>

            </div>
        </article>
    );
};
