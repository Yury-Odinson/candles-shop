import {Metadata} from "next";
import {Header} from "@/components/shared";

export const metadata: Metadata = {
    title: "Candles shop"
};

export default function CheckoutLayout({children}) {
    return (
        <main className="bg-secondary">
            <Header hasSearch={false} hasCart={false}/>
            {children}
        </main>
    );
};
