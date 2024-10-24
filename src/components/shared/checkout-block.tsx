import React from "react";
import {cn} from "@/lib/utils";

interface Props {
    title?: string;
    endAdornment?: React.ReactNode;
    className?: string;
}

export const CheckoutBlock: React.FC<Props> = ({title, endAdornment, className, children}) => {
    return (
        <div className={cn("my-5 p-5 bg-white rounded-2xl ", [className])}>
            {title && (
                <div>
                    <p className="text-2xl font-bold">
                        {title}
                    </p>
                    {endAdornment}
                </div>)}

            <div className="bg-white p-2">
                {children}
            </div>
        </div>
    );
};
