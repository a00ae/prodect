import { type ReactNode, createContext, useContext, useMemo } from "react";
import type { Product } from "../opp/opp";

// توليد مسارات الصور تلقائياً بناءً على العدد (4 صور) والنمط المتسلسل للاسم
const clientImages = Array.from(
  { length: 6 },
  (_, i) => `/clients/clents-0${i + 1}.svg`,
);

export interface BoxCard {
  imges?: string;
  price?: string;
  title?: string;
  desc?: string;
}

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

const box: BoxCard[] = [
  {
    imges: clientImages[0],
  },
  {
    imges: clientImages[1],
  },
  {
    price: "200",
    title: "Average Growth",
    desc: "In client engagement and reach",
  },
  {
    imges: clientImages[2],
  },
  {
    price: "150",
    title: "Average Growth",
    desc: "In client engagement and reach",
  },
  {
    imges: clientImages[3],
  },
  {
    price: "95",
    title: "Client Retention Rate",
    desc: "Built on trust and results",
  },
  {
    imges: clientImages[4],
  },
  {
    imges: clientImages[5],
  },
];

const cardCaseStudy: {id:number; title: string; img?: string; desc?: string | string[] }[] = [
  {
    id: 1,
    title: "Overview",
    desc: "Crafted a refined digital identity and eCommerce experience for a luxury skincare brand, resulting in a 180% increase in online conversions",
  },
  {
    id: 2,
    title: "Nova Skincare",
    desc: "2025",
    img: "/CaseStudy/case-study-01.avif"
  },
  {
    id: 3,
    title: "They elevated our entire identity and helped us connect with our audience in a way we never imagined.",
    desc: ["Sophia Reynolds", "CEO of Nova Skincare" ],
    img: "/CaseStudy/case-study-02.avif"
  },
  {
    id: 4,
    title: "+180",
    desc: "increase in sales",
  },
  {
    id: 5,
    title: "+50",
    desc: "New Customer Acquisition",
  },
  {
    id: 6,
    title: "3",
    desc: "higher engagement",
  },
  {
    id: 7,
    title: "95",
    desc: "Customer Satisfaction Rate",
  },

];

type ProductContextType = {
  products: Product[];
  box: BoxCard[];
};

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const value = useMemo(() => ({ products: cardItem, box, cardCaseStudy }), []);
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
