"use client";

import Link from "next/link";
import Image from "next/image";
import HeaderLogoImg from "/src/assets/images/header-logo.png";
import "../../../app/globals.css";
import React from "react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui";
import {ArrowRight, ShoppingCart} from "lucide-react";
import {TopBar} from "@/components/shared/top-bar";
import {usePathname} from "next/navigation";
import {SearchInput} from "@/components/shared/search-input";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {

    const path = usePathname();

    return (
        <header className={cn("sticky top-0 border-b bg-white opacity-90 " +
            "hover:opacity-100 transition", [className])}>
            <div className="mx-auto max-w-[1440px]">
                <nav className="py-2 px-4 flex items-center gap-6">
                    <Link href="/">
                        <div className="flex items-center gap-2">
                            <Image
                                src={HeaderLogoImg}
                                alt="logo"
                                width={70}
                                height={70}
                            />
                            <div className="leading-4 font-bold">
                                <h1 className="text-4xl uppercase">Свечи </h1>
                                <h2 className="">ручной работы</h2>
                            </div>
                        </div>
                    </Link>

                    <SearchInput/>

                    <Link href="basket">
                        <Button variant="default" className="group relative">
                            <b>777 р.</b>
                            <span className="h-full w-[1px] bg-white/30 mx-3"/>
                            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                                <ShoppingCart size={16} className="h-4 w-4 relative"/>
                                <b>3</b>
                            </div>
                            <ArrowRight size={20} className="w-5 absolute right-5 transition duration-300 -translate-x-2
                        opacity-0 group-hover:opacity-100 group-hover:translate-x-0"/>
                        </Button>
                    </Link>
                </nav>
                <TopBar className={path !== "/" ? "hidden" : ""}/>
            </div>
        </header>
    );
};
