import type {Metadata} from "next";
import {Nunito} from 'next/font/google';
import "./globals.css";
import {Header} from "@/components/shared";
import toast, { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
    title: "Candles shop"
};

const nunito = Nunito({
    subsets: ['cyrillic'],
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={nunito.className}>

        <Header/>

        <main>
            {children}
            <Toaster/>
        </main>

        </body>
        </html>
    );
}
