import type { ReactNode } from "react";


export type Product = { name: string; icon: ReactNode | null };

export type Shopping = {
    data: string;
    title: string;
    projects?: string;
    // className?: string;
}

export interface BoxType{
    heading: string;
    text?: string;
    more: string;
    title: Shopping;
}


