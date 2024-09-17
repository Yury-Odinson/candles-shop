import React from "react";
import {cn} from "@/lib/utils";
import {Card} from "@/components/shared/card";

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

    return (
        <>
            <h3 className="p-2 text-primary text-center">{title}</h3>
            <section className={cn("grid grid-cols-4 gap-5", [className])} key={categoryId}>

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
