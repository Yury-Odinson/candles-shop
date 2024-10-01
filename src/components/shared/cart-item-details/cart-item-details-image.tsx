import React from "react";
import {cn} from "@/lib/utils";

interface Props {
    src: string;
    className?: string;
}

export const CartItemDetailsImage: React.FC<Props> = ({src, className}) => {
    return (
        <img className={cn("w-[80px] h-[80px]", className)} src={src} alt="item"/>
    );
};
