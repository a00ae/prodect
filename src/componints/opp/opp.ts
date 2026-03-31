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
  isActive?: "img1" | "img2";
}

export type PricingCard = {
  title: string;
  desc: string;
  discount?: string | number;
  price: { id: string | number; "price-title": string }[];
  month: string | number;
  sallrey?: number | string;
};

type MoreLinkProps = {
  moreLink?: string;
};

type TextDesc = {
  text?: string;
};

type ButtonText = {
  buttonText?: string;
};

type HighlightWords = {
  highlightWords?: string[];
};

export interface BoxTitle {
  id: string;
  label: string;
  heading?: string;
  subText?: string;
}
export type BoxType = {
  title: BoxTitle;
} & MoreLinkProps &
  TextDesc &
  ButtonText &
  HighlightWords;

export enum BoxSection {
  AboutUs = "aboutUs",
  ShoppingCart = "shoppingCart",
  Services = "services",
  Process = "process",
  WhyUs = "whyUs",
  Clients = "clients",
  Testimonials = "testimonials",
  OurTeam = "ourTeam", // تم تصحيح الإملاء هنا
  CaseStudy = "caseStudy",
  Pricing = "pricing",
  FAQs = "faqs",
}

export type BoxContextType = Record<BoxSection, BoxType>;
