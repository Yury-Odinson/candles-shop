import React from "react";
import {cn} from "@/lib/utils";
import {CountItemButton} from "@/components/shared/count-icon-button";

interface Props {
    value?: number;
    size?: "sm" | "lg";
    className?: string;
    onClick?: (type: "plus" | "minus") => void;
}

export const CountButton: React.FC<Props> = ({
                                                 value = 1,
                                                 size,
                                                 className,
                                                 onClick
                                             }) => {
    return (
        <div className={cn("flex items-center gap-2", className)}>

            <CountItemButton
                onClick={() => onClick?.("minus")}
                disabled={value === 1}
                size={size}
                type="minus"
            />

            <b className={size === "sm" ? "text-sm" : "text-md"}>{value}</b>

            <CountItemButton
                onClick={() => onClick?.("plus")}
                size={size}
                type="plus"
            />

        </div>
    );
};
