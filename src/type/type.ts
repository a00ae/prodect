import type { Dispatch, ReactNode, SetStateAction } from "react";
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


















export interface Prodact {
    id: string;
    urlImage: string;
    rute: number;
    discount: number;
    price: number;
}
export interface ListDataProps {
    data: Prodact[];
}
export interface Props {
  children: ReactNode;
}
export interface ShoppingCartContextType {
  count: Prodact[];
  setCount: Dispatch<SetStateAction<Prodact[]>>;
  loading: boolean;
  data: Prodact[];
}