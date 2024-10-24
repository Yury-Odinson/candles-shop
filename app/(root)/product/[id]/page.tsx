import {prisma} from "../../../../prisma/prisma-client";
import {notFound} from "next/navigation";
import React from "react";
import {ProductItemPage, Recommended} from "@/components/shared";

interface Props {
    params: {
        id: string;
    };
}

export default async function ProductPage({params: {id}}: Props) {

    const product = await prisma.product.findFirst({
        where: {id: Number(id)}
    });

    if (!product) {
        return notFound();
    }

    const recommended = await prisma.product.findMany({
        where: {
            categoryId: product.categoryId
        }
    });

    return (
        <>
            <section>

                <ProductItemPage product={product}/>

            </section>

            <p className="mx-auto p-4 max-w-[1440px] text-xl">Смотрите также</p>

            <section
                className="flex flex-col mx-auto py-10 px-4 sm:grid grid-cols-[repeat(auto-fill,250px)]
                justify-around gap-6 max-w-[1440px]"
            >

                {recommended
                    .filter(product => product.id !== Number(id))
                    .map(product => (
                        <Recommended
                            name={product.name}
                            description={product.description}
                            imageUrl={product.imageUrl}
                            id={product.id}
                            price={product.price}
                            key={product.id}
                        />
                    ))}
            </section>

        </>
    );
};
