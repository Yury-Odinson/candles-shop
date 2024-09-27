import React from "react";
import {Skeleton} from "@/components/ui";

export const SkeletonRecommended =() => {
    return (
        <article className="p-2 flex flex-col justify-between min-w-[200px] w-[15vw] h-[35vh] shadow-2xl rounded-2xl">
            <Skeleton className="w-1/2 h-6"/>
            <Skeleton className="h-[180px] w-[180px] rounded-xl"/>
            <Skeleton className="ml-auto w-1/2 h-6"/>
        </article>
    );
};
