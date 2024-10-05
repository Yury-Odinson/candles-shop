import {ArrowRight, ShoppingCart} from "lucide-react";
import {Button} from "@/components/ui";
import React from "react";
import {CartDrawer} from "@/components/shared/cart-drawer";

interface Props {
    className?: string;
}

export const CartButton: React.FC<Props> = ({className}) => {
    return (
        <CartDrawer>
            <Button variant="default" className={className + "group relative"}>
                <b className="hidden sm:block">777 р.</b>
                <span className="hidden sm:block h-full w-[1px] bg-white/30 mx-3"/>
                <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                    <ShoppingCart size={16} className="h-4 w-4 relative"/>
                    <b>3</b>
                </div>
                <ArrowRight size={20} className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0
                group-hover:opacity-100 group-hover:translate-x-0"
                />
            </Button>
        </CartDrawer>
    );
};
