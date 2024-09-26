"use client";

import React from "react";
import Link from "next/link";

interface Props {
    name: string,
    description: string,
    imageUrl: string,
    id: string,
    price: string
}

export const Recommended: React.FC<Props> = ({name, imageUrl, id, price}) => {

    return (
        <Link href={"/product/" + id}>

            <article className="p-2 flex flex-col gap-2 max-w-[200px] shadow-2xl rounded-2xl">
                <span className="text-xs">{name}</span>
                <img src={imageUrl} alt={name} width={180} height={180}/>
                <span className="ml-auto">{price} р.</span>
            </article>

        </Link>
    );
};
