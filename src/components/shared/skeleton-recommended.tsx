import React from "react";
import {Skeleton} from "@/components/ui";

export const SkeletonRecommended =() => {
    return (
        <article className="mx-auto w-[90vw] h-[60vh] sm:w-[5vw] sm:h-[25vh] p-4 flex flex-1 flex-col gap-6
                    justify-between min-w-[250px] min-h-[350px] shadow-2xl rounded-2xl text-xl">
            <Skeleton className="w-1/2 h-6"/>
            <Skeleton className="min-w-[180px] min-h-[180px] w-full h-full"/>
            <Skeleton className="ml-auto w-1/2 h-6"/>
        </article>
    );
};
