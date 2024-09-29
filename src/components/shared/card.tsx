import React from "react";
import {CirclePlus} from "lucide-react";
import {Button} from "@/components/ui";
import Link from "next/link";

interface Props {
    name: string,
    description: string,
    imageURL: string,
    id: string,
    price: string
}

export const Card: React.FC<Props> = ({name, description, imageURL, id, price}) => {
    return (
        <article className="flex flex-col justify-between bg-secondary rounded-2xl min-w-[200px]" id={`card_${id}`}>

            <Link href={"/product/" + id}>
                <div>
                    <p className="p-4 text-2xl font-bold">{name}</p>
                    <img src={imageURL} alt={name}/>
                    <p className="mt-2 p-2 text-justify indent-5">{description}</p>
                </div>
            </Link>

            <div className="flex mt-5 justify-between">
                <p className="text-2xl font-bold pl-4">{price} р.</p>

                <Button variant="default">
                    <CirclePlus/>
                </Button>

            </div>

        </article>
    );
};
