import {Metadata} from "next";
import {Header} from "@/components/shared";

export const metadata: Metadata = {
    title: "Candles shop"
};

export default function CheckoutLayout({children}) {
    return (
        <main>
            <Header hasSearch={false} hasCart={false} className="bg-secondary" />
            {children}
        </main>
    );
};
