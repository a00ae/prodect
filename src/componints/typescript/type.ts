import type { ReactNode } from "react";


export type Product = { name: string; icon: ReactNode | null };

export type Shaping = {
    data: string;
    title: string;
    projects?: string;
    className: string;
}

export interface Box{
    heading: string;
    text?: string;
    more: string;
}


