import React from "react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui";
import {Minus, Plus} from "lucide-react";

interface Props {
    className?: string;
    size?: string;
    disabled?: boolean;
    type?: "plus" | "minus";
    onClick?: () => void;
}

export const CountItemButton: React.FC<Props> = ({
                                                     className,
                                                     size,
                                                     disabled,
                                                     type,
                                                     onClick
                                                 }) => {
    return (
        <Button
            variant="outline"
            disabled={disabled}
            onClick={onClick}
            className={cn("p-0 w-10 h-10 disabled:bg-white disabled:border-gray-400 disabled:text-gray-400", className)}
        >
            {type === "plus" ? (
                <Plus className={size === "sm" ? "h-4" : "h-5"}/>
            ) : (
                <Minus className={size === "sm" ? "h-4" : "h-5"}/>
            )}

        </Button>
    );
};
