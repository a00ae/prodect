import type { ReactNode as  ReactNodeElement} from "react";

export interface Product {
  name: string;
  text: string;
  image: string;
  description: {
    Year: string;
    [key: string]: string | ReactNodeElement;
  };
}



export type Shopping = {
    data: string;
    title: string;
    projects?: string;
    heading?: string | ReactNodeElement;
    // className?: string;
}

export interface BoxType{
    // heading?: string | ReactNode;
    text?: string;
    more: string;
    title: Shopping;
}


