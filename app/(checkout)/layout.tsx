import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Candles shop"
};

export default function CheckoutLayout({children}) {
    return (
        <main>
            {children}
        </main>
    );
};
