"use client";

import React, {useState} from "react";
import {cn} from "@/lib/utils";
import {Search} from "lucide-react";
import {useClickAway} from "react-use";
import Link from "next/link";
import {Api} from "../../../services/api-client";
import {Product} from "@prisma/client";

interface Props {
    className?: string;
}

export const SearchInput: React.FC<Props> = ({className}) => {

    const [searchQuery, setSearchQuery] = React.useState("");
    const [focused, setFocused] = React.useState<boolean>(false);
    const [products, setProducts] = useState<Product[]>([]);

    const ref = React.useRef(null);

    useClickAway(ref, () => {
        setFocused(false);
    });

    React.useEffect(() => {
        Api.products.search(searchQuery)
            .then(items => setProducts(items));

    }, [searchQuery]);

    return (
        <>
            {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30"/>}

            <label ref={ref}
                   className={cn("relative flex flex-1  items-center bg-gray-100 h-10 rounded-2xl z-30", [className])}>
                <Search className="mx-2 opacity-50"/>
                <input
                    type="text"
                    placeholder="Найти"
                    className="mr-4 bg-inherit outline-none w-full h-full text-2xl"
                    onFocus={() => setFocused(true)}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <div
                    className={cn("absolute w-full bg-white " +
                        "rounded-2xl top-20 shadow-md transition-all duration-200 invisible opacity-0 z-30 ",
                        focused && "visible opacity-100 top-16"
                    )}>

                    <div className="flex flex-col gap-2 my-2 max-h-[50vh] overflow-y-scroll empty:hidden">
                        {
                            products.map(product => (
                                <Link
                                    key={product.id}
                                    href={`/product/${product.id}`}
                                    className="flex mx-2 items-center gap-4 text-lg hover:bg-secondary rounded-2xl transition">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        width={44} height={44}
                                        className="p-1 rounded-2xl"
                                    />
                                    <span>{product.name}</span>
                                </Link>
                            ))
                        }

                    </div>

                </div>

            </label>
        </>

    );
};
