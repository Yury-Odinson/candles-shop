"use client";

import React from "react";
import {useIntersection} from "react-use";
import {cn} from "@/lib/utils";
import {Card} from "@/components/shared/card";
import {useCategoryStore} from "@/store/category";

interface Item {
    name: string,
    description: string,
    imageUrl: string,
    id: string,
    price: string
}

interface Props {
    title: string,
    items: any,
    categoryId: number,
    className?: string
}

export const ProductsGroup: React.FC<Props> = ({title, items, categoryId, className}) => {

    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.5
    });

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId)
        }
    }, [categoryId, intersection?.isIntersecting, title]);

    return (
        <div className="section__item py-10">
            <h3 className="pb-2 w-full text-primary text-2xl text-center">{title}</h3>
            <section className={cn("flex flex-wrap mx-auto p-4 max-w-[1440px] sm:grid grid-cols-4 gap-5", [className])}
                     key={categoryId}
                     id={title} ref={intersectionRef}>

                {items?.map((product: Item, index: string) => (
                    <Card name={product.name}
                          description={product.description}
                          imageURL={product.imageUrl}
                          id={product.id}
                          price={product.price}
                          key={index}
                    />
                ))}

            </section>
        </div>
    );
};
