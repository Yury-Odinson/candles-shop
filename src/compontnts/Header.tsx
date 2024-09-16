import Link from "next/link";
import Image from "next/image";
import HeaderLogoImg from "/src/assets/images/headerLogo.png";

import "../app/globals.css";
import {Button} from "@/components/ui/button";

export const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <nav>
                    <ul className="flex items-center justify-between ">

                        <Link href="/">
                            <li className="p-2 ">
                                <Image
                                    src={HeaderLogoImg}
                                    alt="logo"
                                    width={200}
                                    height={40}
                                />
                            </li>
                        </Link>

                        <Link href="basket">
                            <li className="relative flex items-center gap-4 p-1 pl-3 pr-3 bg-sky-100 rounded-3xl">

                                <Button variant="outline">Корзина</Button>

                                <p className="m-1 pr-2 border-sky-200 border-r-2"> 13 руб.</p>
                                <div className="basket__counter absolute top-0 right-3 bg-blue-900 w-5 h-5 rounded-3xl">
                                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2
                                    -translate-y-1/2 text-white">3</span>
                                </div>

                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M33.3 7.8C32.55 6.9 31.5 6.3 30.3 6.3H12.6C11.7 6.3 11.1 6.9 11.1 7.8C11.1
                                        8.7 11.7 9.3 12.6 9.3H30.15C30.45 9.3 30.75 9.45 30.75 9.6C30.9 9.9 31.05 10.2
                                        30.9 10.5L28.8 19.65C28.5 21.15 27.15 22.2 25.65 22.2H16.05C14.55 22.2 13.35
                                        21.3 12.9 19.8L11.7 16.05L8.55 5.7C7.8 3.15 5.55 1.5 3 1.5C2.1 1.5 1.5 2.1 1.5
                                        3C1.5 3.9 2.1 4.5 3 4.5C4.2 4.5 5.4 5.4 5.7 6.6L6.75 10.05L10.05 20.7C10.8 23.4
                                        13.2 25.2 16.05 25.2H25.95C28.95 25.2 31.35 23.1 32.1 20.25L34.2 11.1C34.35
                                        10.05 34.05 8.85 33.3 7.8Z"
                                        fill="black"/>
                                    <path
                                        d="M14.8492 26.7002C12.7492 26.7002 10.9492 28.5002 10.9492 30.6002C10.9492
                                        32.7002 12.7492 34.5002 14.8492 34.5002C16.9492 34.5002 18.7492 32.7002 18.7492
                                        30.6002C18.7492 28.5002 16.9492 26.7002 14.8492 26.7002ZM14.8492 31.5002C14.3992
                                        31.5002 13.9492 31.0502 13.9492 30.6002C13.9492 30.1502 14.3992 29.7002 14.8492
                                         29.7002C15.2992 29.7002 15.7492 30.1502 15.7492 30.6002C15.7492 31.0502 15.2992
                                         31.5002 14.8492 31.5002Z"
                                        fill="black"/>
                                    <path
                                        d="M26.7008 26.7002C24.6008 26.7002 22.8008 28.5002 22.8008 30.6002C22.8008
                                        32.7002 24.6008 34.5002 26.7008 34.5002C28.8008 34.5002 30.6008 32.7002 30.6008
                                        30.6002C30.6008 28.5002 28.8008 26.7002 26.7008 26.7002ZM26.7008 31.5002C26.2508
                                         31.5002 25.8008 31.0502 25.8008 30.6002C25.8008 30.1502 26.2508 29.7002 26.7008
                                          29.7002C27.1508 29.7002 27.6008 30.1502 27.6008 30.6002C27.6008 31.0502
                                          27.1508 31.5002 26.7008 31.5002Z"
                                        fill="black"/>
                                </svg>
                            </li>
                        </Link>

                    </ul>
                </nav>
            </div>
        </header>
    );
};
