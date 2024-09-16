import Link from "next/link";
import Image from "next/image";
import HeaderLogoImg from "/src/assets/images/headerLogo.png";
import "../../app/globals.css";
import React from "react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui";
import {ArrowRight, ShoppingCart} from "lucide-react";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
    return (
        <header className={cn("border-b", [className])}>

            <nav className="mx-auto py-2 flex items-center justify-between max-w-[1440px]">
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

        </header>
    );
};
