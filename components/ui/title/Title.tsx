import React from "react";

interface Props {
    title: string;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    align?: "left" | "center" | "right";
    className?: string;

}

export const Title = ({ title, size = "xl", align = "left", className } : Props ) => {
    return (
        <h2 className={`text-${size} font-bold text-${align} ${className}`}>
            {title}
        </h2>
    )
}