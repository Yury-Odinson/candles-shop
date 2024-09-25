import {prisma} from "../../../prisma/prisma-client";
import {notFound} from "next/navigation";
import {CirclePlus} from "lucide-react";
import {Button} from "@/components/ui";
import React from "react";

export default async function ProductPage({params: {id}}) {

    const product = await prisma.product.findFirst({
        where: {id: Number(id)}
    });

    if (!product) {
        return notFound();
    }

    return (
        <>
            <section>
                <article className="mx-auto p-4 flex flex-wrap gap-6 max-w-[1440px]">

                    <div className="flex flex-1 min-w-[300px]">
                        <img className="object-contain" src={product.imageUrl} alt={product.name}/>
                    </div>

                    <div className="flex flex-1 min-w-[300px] flex-col gap-2">
                        <p className="text-2xl font-bold">{product.name}</p>
                        <p className="flex-1 text-justify indent-5 text-xl">{product.description}</p>

                        <div className="flex items-center justify-end gap-6 ">
                            <span className="ml-auto text-2xl font-bold">{product.price} руб.</span>
                            <Button variant="default">
                                <CirclePlus/>
                            </Button>
                        </div>

                    </div>
                </article>

            </section>
        </>
    );
};
