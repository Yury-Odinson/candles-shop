"use client";

import Link from "next/link";
import Image from "next/image";
import HeaderLogoImg from "/src/assets/images/header-logo.png";
import "../../../app/globals.css";
import React from "react";
import {cn} from "@/lib/utils";
import {TopBar} from "@/components/shared/top-bar";
import {usePathname} from "next/navigation";
import {SearchInput} from "@/components/shared/search-input";
import {CartButton} from "@/components/shared/cart-button";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {

    const path = usePathname();

    return (
        <>
            <header className={cn("bg-gradient-to-b from-gray-200 to-white/80 bg-white" +
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
                                    <div className="hidden sm:block">
                                        <h1 className="text-4xl uppercase">Свечи </h1>
                                        <h2 className="">ручной работы</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <SearchInput/>

                        <CartButton/>

                    </nav>
                </div>
            </header>

            <TopBar className={path !== "/" ? "hidden" : "sticky top-0 "}/>
        </>
    );
};
