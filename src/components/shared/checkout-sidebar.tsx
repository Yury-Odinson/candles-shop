import React from "react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui";

interface Props {
    className?: string;
}

export const CheckoutSidebar: React.FC<Props> = ({className}) => {
    return (
        <div className={cn("my-5 p-5 flex flex-col gap-4 w-full min-w-72 bg-white rounded-2xl", [className])}>
            <p>Итого:</p>
            <span className="font-bold text-2xl">2323 р.</span>

            <Button variant="default">
                <span>Перейти к оплате</span>
            </Button>
        </div>
    );
};
