import React from "react";
import {cn} from "@/lib/utils";

import * as CartItem from "./cart-item-details";
import {CartItemProps} from "@/components/shared/cart-item-details/cart-item-details.types";
import {CountButton} from "@/components/shared/count-button";
import {Trash2Icon} from "lucide-react";

interface Props extends CartItemProps {
    className?: string;
}

export const CartDrawerItem: React.FC<Props> = ({
                                                    id,
                                                    imageUrl,
                                                    name,
                                                    price,
                                                    quantity,
                                                    className
                                                }) => {
    return (
        <div className={cn("-mx-6 flex items-center bg-white p-4 gap-6", className)}>
            <CartItem.Image src={imageUrl}/>
            <div className="flex flex-col flex-1 gap-2">
                <CartItem.Info name={name}/>

                <div className="flex items-center justify-between gap-6">
                    <CountButton onClick={type => console.log(type)} value={quantity}/>
                    <div className="flex items-center gap-2">
                        <CartItem.Price value={price}/>
                        <Trash2Icon size={16} color="gray"/>
                    </div>
                </div>

            </div>

        </div>
    );
};