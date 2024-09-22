"use client";

import React from "react";
import {cn} from "@/lib/utils";
import {Search} from "lucide-react";
import {useClickAway} from "react-use";
import Link from "next/link";
import Image from "next/image";

interface Props {
    className?: string;
}

export const SearchInput: React.FC<Props> = ({className}) => {

    const [focused, setFocused] = React.useState<boolean>(false);
    const ref = React.useRef(null);

    useClickAway(ref, () => {
        setFocused(false);
    })

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
                />

                <div className={cn("absolute p-4 w-full bg-white rounded-2xl top-20 shadow-md transition-all " +
                    "duration-200 invisible opacity-0 z-30 ", focused && "visible opacity-100 top-16"
                )}>

                    <Link href="/product1"
                          className="flex items-center gap-4 text-lg hover:bg-secondary rounded-2xl transition">
                        <img
                            src="https://sun9-27.userapi.com/impg/5tA2qS-QDLm4S3vEFhdz4p2B1sJZFKkV5W2x9Q/393J5pjEIv8.jpg?size=1000x1021&quality=95&sign=1a666539f54a9b8015c6d10dc3bbad9c&type=album"
                            alt="some alt"
                            width={44} height={44}
                            className="p-1 rounded-2xl"
                        />
                        <span>Свеча 1</span>
                    </Link>

                    <Link href="/product2"
                          className="flex items-center gap-4 text-lg hover:bg-secondary rounded-2xl transition">
                        <img
                            src="https://sun9-27.userapi.com/impg/5tA2qS-QDLm4S3vEFhdz4p2B1sJZFKkV5W2x9Q/393J5pjEIv8.jpg?size=1000x1021&quality=95&sign=1a666539f54a9b8015c6d10dc3bbad9c&type=album"
                            alt="some alt"
                            width={44} height={44}
                            className="p-1 rounded-2xl"
                        />
                        <span>Свеча 2</span>
                    </Link>

                    <Link href="/product3"
                          className="flex items-center gap-4 text-lg hover:bg-secondary rounded-2xl transition">
                        <img
                            src="https://sun9-27.userapi.com/impg/5tA2qS-QDLm4S3vEFhdz4p2B1sJZFKkV5W2x9Q/393J5pjEIv8.jpg?size=1000x1021&quality=95&sign=1a666539f54a9b8015c6d10dc3bbad9c&type=album"
                            alt="some alt"
                            width={44} height={44}
                            className="p-1 rounded-2xl"
                        />
                        <span>Свеча 3</span>
                    </Link>

                </div>

            </label>
        </>

    );
};
