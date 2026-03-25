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
