import { ReactNode, createContext, useContext } from "react";
import type { Product } from "../opp/opp";

const cardItem: Product[] = [
  {
    name: "Nova Skincare",
    text: `Crafted a refined digital identity and eCommerce experience
                  for a luxury skincare brand, resulting in a 180% increase in
                  online conversions.`,
    description: {
      Year: "2025",
      Client: "Nova Skincare",
      Type: "Brand Identity",
      Timeline: "3 Months",
    },
    image: "../../public/image-shopping/shopping-01.avif",
  },
  {
    name: "Volt Mobility",
    text: `Developed a high-performance website and multi-channel launch campaign for an electric mobility startup, driving a 3x growth in leads.`,
    description: {
      Year: "2024",
      Client: "Volt Mobility",
      Type: "Marketing Campaign",
      Timeline: "4 Months",
    },
    image: "../../public/image-shopping/shopping-02.avif",
  },
  {
    name: "Maison",
    text: `Produced a high-end brand campaign with visuals, storytelling, and paid media strategy that expanded audience reach by 200%.`,
    description: {
      Year: "2022",
      Client: "Maison & Co",
      Type: "Content Production",
      Timeline: "4 Months",
    },
    image: "../../public/image-shopping/shopping-03.avif",
  },
  {
    name: "Axis Tech",
    text: `Redesigned the digital experience for a SaaS platform, improving usability and increasing user retention by 45%.`,
    description: {
      Year: "2023",
      Client: "Axis Tech",
      Type: "UX/UI Design",
      Timeline: "2.5 Months",
    },
    image: "../../public/image-shopping/shopping-04.avif",
  },
];

type ProductContextType = {
  products: Product[];
};

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ProductContext.Provider value={{ products: cardItem }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};

