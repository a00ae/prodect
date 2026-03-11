import type { ReactNode } from "react";

interface Description {
  Year: string;
  Client: string;
  Type: string;
  Timeline: string;
}

type ProductType = { 
  name: string;
  text: ReactNode | null;
  description: Description;
  image: string;

};

export class Product {
  public readonly name: string;
  public readonly text: ReactNode | null;
  public readonly description: Description;
  public readonly image: string;

  constructor(data: ProductType) {
    this.name = data.name;
    this.text = data.text;
    this.description =  data.description
    this.image =  data.image
  }
}
