import {prisma} from "../../../prisma/prisma-client";
import {notFound} from "next/navigation";
import {CirclePlus} from "lucide-react";
import {Button} from "@/components/ui";
import React from "react";
import {Recommended} from "@/components/shared";

export default async function ProductPage({params: {id}}) {

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
                <article className="mx-auto p-4 flex flex-wrap gap-6 max-w-[1440px]">

                    <div className="flex flex-1 items-center justify-center min-w-[300px]">
                        <img className="object-contain rounded-2xl max-h-[400px]" src={product.imageUrl}
                             alt={product.name}/>
                    </div>

                    <div className="flex flex-1 min-w-[300px] flex-col gap-2">
                        <p className="text-2xl font-bold">{product.name}</p>
                        <p className="flex-1 text-justify indent-5 text-xl">{product.description}</p>

                        <div className="flex items-center justify-end gap-6 ">
                            <span className="ml-auto text-2xl font-bold">{product.price} руб.</span>
                            <Button variant="default" className="flex gap-2">
                                <span>Добавить в корзину</span>
                                <CirclePlus/>
                            </Button>
                        </div>

                    </div>
                </article>

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
