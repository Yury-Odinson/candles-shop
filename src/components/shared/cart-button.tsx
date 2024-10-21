import {ArrowRight, ShoppingCart} from "lucide-react";
import {Button} from "@/components/ui";
import React from "react";
import {CartDrawer} from "@/components/shared/cart-drawer";
import {useCartStore} from "@/store/cart";
import {cn} from "@/lib/utils";

interface Props {
    className?: string;
}

export const CartButton: React.FC<Props> = ({className}) => {

    const loading = useCartStore((state) => state.loading);
    const amount = useCartStore((state) => state.totalAmount);
    const count = useCartStore((state) => state.items.length);

    return (
        <CartDrawer>
            <Button loading={loading} variant="default" className={cn("group relative min-w-[135px]", className)}>
                <b className="hidden sm:block">{amount} р.</b>
                <span className="hidden sm:block h-full w-[1px] bg-white/30 mx-3"/>
                <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                    <ShoppingCart size={16} className="h-4 w-4 relative"/>
                    <b>{count}</b>
                </div>
                <ArrowRight size={20} className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0
                group-hover:opacity-100 group-hover:translate-x-0"
                />
            </Button>
        </CartDrawer>
    );
};
