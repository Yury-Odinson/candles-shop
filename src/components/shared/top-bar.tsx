"use client";

import React from "react";
import {cn} from "@/lib/utils";
import {useCategoryStore} from "@/store/category";

interface Props {
    className?: string;
}

interface Category {
    id: number;
    name: string
}

const categories: Category[] = [
    {id: 1, name: "Свечи"},
    {id: 2, name: "Наборы"},
    {id: 3, name: "В подарок"},
    {id: 4, name: "Сделай сам"},
];

export const TopBar: React.FC<Props> = ({className}) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId);
    return (
        <div className={cn("bg-white", [className])}>
            <div className="mx-auto max-w-[1440px] flex justify-center sm:justify-normal sm:gap-6  text-sm sm:text-2xl">
                {
                    categories.map(({id, name}, index) => (
                        <a className={cn("p-2 flex items-center hover:text-muted-foreground transition " +
                            "text-nowrap",
                            categoryActiveId === id && "rounded-2xl border-1 text-primary hover:text-primary"
                        )} key={index}>
                            <button>{name}</button>
                        </a>
                    ))
                }
            </div>

        </div>
    );
};
