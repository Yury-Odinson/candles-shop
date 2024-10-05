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
    }, []);

    if (!url) {
        return <SkeletonRecommended/>
    } else {
        return (
            <Link href={"/product/" + id}>
                <article
                    className="mx-auto w-[90vw] h-[60vh] sm:w-[5vw] sm:h-[25vh] p-4 flex flex-1 flex-col gap-6
                    justify-between min-w-[250px] min-h-[350px] shadow-2xl rounded-2xl text-xl">
                    <span>{name}</span>
                    <img className="min-w-[180px] min-h-[180px] w-full h-full"
                         src={url}
                         alt={name}
                         width={180}
                         height={180}
                    />
                    <span className="ml-auto">{price} р.</span>
                </article>
            </Link>
        );
    }

};
