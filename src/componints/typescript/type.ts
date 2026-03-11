import type { ReactNode } from "react";


export type Product = { name: string; icon: ReactNode | null };

export type Shopping = {
    data: string;
    title: string;
    projects?: string;
    heading?: string | ReactNode;
    // className?: string;
}

export interface BoxType{
    heading?: string | ReactNode;
    text?: string;
    more: string;
    title: Shopping;
}


