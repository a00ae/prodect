import type { ReactNode } from "react";

export interface Description {
  Year: string;
  Client: string;
  Type: string;
  Timeline: string;
}

export interface Product {
  name: string;
  text: ReactNode | null;
  description: Description;
  image: string;
}

export type Shopping = {
  data: string;
  title: string;
  projects?: string;
  heading?: string | ReactNode;
};

export interface BoxType {
  text?: string;
  more?: string;
  title: Shopping;
  highlightWords?: string[];
  btn?: string
}

export interface BoxCard {
  imges?: string;
  price?: string;
  title?: string;
  desc?: string;
}

 export interface CaseStudyItem {
  id: number;
  title: string;
  desc: string | string[];
  img?: string;
  isActive?: "img1" | "img2" ;
}


export type PricingCard = {
  title: string;
  desc: string;
  discount?: string | number;
  price: {id: string | number; "price-title": string}[];
  month: string | number;
}