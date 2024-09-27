"use client";

import React from "react";
import Link from "next/link";
import {SkeletonRecommended} from "@/components/shared/skeleton-recommended";

interface Props {
    name: string,
    description: string,
    imageUrl: string,
    id: string,
    price: string
}

export const Recommended: React.FC<Props> = ({name, imageUrl, id, price}) => {

    const [url, setUrl] = React.useState<string>("");

    React.useEffect(() => {
        fetch(imageUrl)
            .then(response => response.blob())
            .then((image) => {
                setUrl(URL.createObjectURL(image));
            });
    });

    if (!url) {
        return <SkeletonRecommended/>
    } else {
        return (
            <Link href={"/product/" + id}>
                <article
                    className="p-2 flex flex-col justify-between min-w-[200px] w-[15vw] h-[35vh] shadow-2xl rounded-2xl">
                    <span className="text-xs">{name}</span>
                    <img className="min-w-[180px] w-[14vw] h-[25vh]" src={url} alt={name} width={180} height={180}/>
                    <span className="ml-auto">{price} р.</span>
                </article>
            </Link>
        );
    }

};
