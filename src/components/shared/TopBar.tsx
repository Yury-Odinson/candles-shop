import React from "react";
import {cn} from "@/lib/utils";

interface Props {
    className?: string;
}

const categories: string[] = ["Свечи", "Наборы", "В подарок", "Сделай сам"];
const activeIndex: number = 0;

export const TopBar: React.FC<Props> = ({className}) => {
    return (
        <div className={cn(" inline-flex gap-6 bg-gray-50  px-0 rounded-2xl text-2xl", [className])}>
            {
                categories.map((cat, index) => (
                    <a className={cn("py-2 px-4 flex items-center  hover:text-muted-foreground transition ",
                        activeIndex === index && "rounded-2xl border-1 text-primary hover:text-primary"
                    )} key={index}>

                        <button>{cat}</button>
                    </a>
                ))
            }
        </div>
    );
};
