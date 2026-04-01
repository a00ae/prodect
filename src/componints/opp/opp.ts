import type { ReactNode } from "react";

type Id = {
  id: string | number;
};
type Title = {
  title: string;
};

type DescriptionGlobal = {
  desc: string;
};
type Image = {
  img?: string;
}
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

export type CaseStudyItem = {
  desc: string | string[];
  isActive?: "img1" | "img2";
} & Title &
  Id & Image;

export type PricingCard = {
  discount?: string | number;
  price: { id: string | number; "price-title": string }[];
  month: string | number;
  sallrey?: number | string;
} & Title &
  DescriptionGlobal;

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

export type BoxTitle = {
  label: string;
  heading?: string;
  subText?: string;
} & Id;
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
  Blog = "blog",
}

export type BoxContextType = Record<BoxSection, BoxType>;

export type Blog = {
  date: string;
  section: string;

} & Id & Title & DescriptionGlobal & Image;
