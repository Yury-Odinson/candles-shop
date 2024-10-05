import React from "react";

interface Props {
    name: string;
}

export const CartItemInfo: React.FC<Props> = ({name}) => {
    return <div className="font-bold text-neutral-700 text-xl border-b border-dashed border-b-neutral-200">{name}</div>;
};
