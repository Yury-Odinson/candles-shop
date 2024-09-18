"use client";

import React from "react";
import {useIntersection} from "react-use";
import {cn} from "@/lib/utils";
import {Card} from "@/components/shared/card";
import {useCategoryStore} from "@/store/category";

interface Items {
    name: string,
    description: string,
    imageURL: string,
    id: string,
    price: string
}

interface Props {
    title: string,
    items: Items[],
    categoryId: number,
    className?: string
}

export const ProductsGroup: React.FC<Props> = ({title, items, categoryId, className}) => {

    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4
    });

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId)
        }
    }, [categoryId, intersection?.isIntersecting, title]);

    return (
        <>
            <h3 className=" my-2 p-2 text-primary text-2xl text-center">{title}</h3>
            <section className={cn("grid grid-cols-4 gap-5", [className])} key={categoryId} id={title} ref={intersectionRef}>

                {items?.map((product, index) => (
                    <Card name={product.name}
                          description={product.description}
                          imageURL={product.imageURL}
                          id={product.id}
                          price={product.price}
                          key={index}
                    />
                ))}

            </section>
        </>
    );
};
