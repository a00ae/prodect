import type { ReactNode } from "react";



export class Product {
  public readonly name: string;
  public readonly icon: ReactNode | null;

  constructor(name: string, icon: ReactNode | null) {
    this.name = name;
    this.icon = icon;
  }
}
