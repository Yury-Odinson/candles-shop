import {Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import React from "react";
import {Button} from "@/components/ui";
import {ArrowRight} from "lucide-react";
import Link from "next/link";
import {CartDrawerItem} from "@/components/shared/cart-drawer-item";

interface Props {
    className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({children, className}) => {
    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className="flex flex-col justify-between bg-gray-100">

                <SheetHeader>
                    <SheetTitle>В корзине 3 товара</SheetTitle>
                </SheetHeader>

                <div className="my-5 -mx-6 flex flex-1 flex-col gap-2 overflow-y-scroll">

                    <CartDrawerItem
                        id={1}
                        imageUrl={"https://sun9-45.userapi.com/impg/sK-WNF9x0vCIAkKHKArYNZZ6YIWAH3ZXboFuTQ/va6LYrlfo-Q.jpg?size=1140x799&quality=95&sign=e8379d3f9914615786e0e77d5d197c1c&type=album"}
                        name={"asd"}
                        price={235}
                        quantity={1}
                    />

                    <CartDrawerItem
                        id={1}
                        imageUrl={"https://sun9-45.userapi.com/impg/sK-WNF9x0vCIAkKHKArYNZZ6YIWAH3ZXboFuTQ/va6LYrlfo-Q.jpg?size=1140x799&quality=95&sign=e8379d3f9914615786e0e77d5d197c1c&type=album"}
                        name={"asd"}
                        price={235}
                        quantity={1}
                    />

                    <CartDrawerItem
                        id={1}
                        imageUrl={"https://sun9-45.userapi.com/impg/sK-WNF9x0vCIAkKHKArYNZZ6YIWAH3ZXboFuTQ/va6LYrlfo-Q.jpg?size=1140x799&quality=95&sign=e8379d3f9914615786e0e77d5d197c1c&type=album"}
                        name={"asd"}
                        price={235}
                        quantity={1}
                    />
                    <CartDrawerItem
                        id={1}
                        imageUrl={"https://sun9-45.userapi.com/impg/sK-WNF9x0vCIAkKHKArYNZZ6YIWAH3ZXboFuTQ/va6LYrlfo-Q.jpg?size=1140x799&quality=95&sign=e8379d3f9914615786e0e77d5d197c1c&type=album"}
                        name={"asd"}
                        price={235}
                        quantity={1}
                    />

                </div>

                <SheetFooter className="-m-6 p-6 bg-white text-2xl">
                    <div className="flex flex-col gap-6 w-full">
                        <div className="flex">
                            <span className="flex flex-1 text-neutral-500">
                                Итого:
                                <div
                                    className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"/>
                            </span>
                            <span className="text-neutral-700 font-bold">777 р.</span>
                        </div>
                        <Link href="/cart">
                            <Button className="flex gap-2 py-6 w-full text-xl" size="lg">
                                <span>Оформить заказ</span>
                                <ArrowRight size={20} className=""/>
                            </Button>
                        </Link>
                    </div>
                </SheetFooter>

            </SheetContent>
        </Sheet>
    );
};
