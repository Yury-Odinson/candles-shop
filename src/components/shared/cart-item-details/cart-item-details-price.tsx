import React from "react";
import {cn} from "@/lib/utils";

interface Props {
    value: number;
    className?: string
}

export const CartItemDetailsPrice: React.FC<Props> = ({value, className}) => {
    return (
        <div className={cn("", className)}>
            <span className="font-bold">{value} р.</span>
        </div>
    );
};
