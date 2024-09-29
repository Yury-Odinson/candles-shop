"use client";

import React from "react";
import {cn} from "@/lib/utils";
import {useCategoryStore} from "@/store/category";

interface Props {
    className?: string;
}

const categories: object[] = [
    {id: 1, name: "Свечи"},
    {id: 2, name: "Наборы"},
    {id: 3, name: "В подарок"},
    {id: 4, name: "Сделай сам"},
];

export const TopBar: React.FC<Props> = ({className}) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId);
    return (
        <div className={cn("mx-auto max-w-[1440px] flex gap-6 bg-white text-2xl", [className])}>
            {
                categories.map(({id, name}, index) => (
                    <a className={cn("py-2 px-4 flex items-center hover:text-muted-foreground transition ",
                        categoryActiveId === id && "rounded-2xl border-1 text-primary hover:text-primary"
                    )} key={index}>
                        <button>{name}</button>
                    </a>
                ))
            }
        </div>
    );
};
