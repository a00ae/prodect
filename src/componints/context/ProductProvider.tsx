import { type ReactNode, createContext, useContext, useMemo } from "react";
import type { BoxCard, CaseStudyItem, Product, PricingCard } from "../opp/opp";

// توليد مسارات الصور تلقائياً بناءً على العدد (4 صور) والنمط المتسلسل للاسم
const clientImages = Array.from(
  { length: 6 },
  (_, i) => `/clients/clents-0${i + 1}.svg`,
);

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

const cardCaseStudy: CaseStudyItem[] = [
  {
    id: 1,
    title: "Overview",
    desc: "Crafted a refined digital identity and eCommerce experience for a luxury skincare brand, resulting in a 180% increase in online conversions",
  },
  {
    id: 2,
    title: "Nova Skincare",
    desc: "2025",
    img: "/CaseStudy/case-study-01.avif",
    isActive: "img1",
  },
  {
    id: 3,
    title:
      "They elevated our entire identity and helped us connect with our audience in a way we never imagined.",
    desc: ["Sophia Reynolds", "CEO of Nova Skincare"],
    img: "/CaseStudy/case-study-02.avif",
    isActive: "img2",
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

const pricingCard: PricingCard[] = [
  {
    title: "Basic",
    desc: "Perfect for startups and growing brands looking for consistent design and marketing support",
    month: 1200,
    price: [
      {
        "price-title": "Up to 20 design & marketing requests",
        id: 1,
      },
      {
        "price-title": "Brand, social & web design support",
        id: 2,
      },
      {
        "price-title": "Monthly strategy call",
        id: 3,
      },
      {
        "price-title": "Priority email support",
        id: 4,
      },
      {
        "price-title": "5-day turnaround per request",
        id: 5,
      },
      {
        "price-title": "Pause or cancel anytime",
        id: 6,
      },
    ],
    sallrey: 1000,
  },
  {
    title: "Premium",
    desc: "Ideal for established brands seeking dedicated creative partnership and full-scale marketing",
    month: 2500,
    discount: 3000,
    price: [
      {
        "price-title": "Unlimited design & marketing requests",
        id: 1,
      },
      {
        "price-title": "Dedicated project manager",
        id: 2,
      },
      {
        "price-title": "Bi-weekly strategy sessions",
        id: 3,
      },
      {
        "price-title": "Paid ads & campaign managementns",
        id: 4,
      },
      {
        "price-title": "Priority turnaround & support",
        id: 5,
      },
      {
        "price-title": "Pause or cancel anytime",
        id: 6,
      },
    ],
    sallrey: 2900
  },
  {
    title: "Project-based",
    desc: "Best for one-time projects like branding, web design, or campaign launches",
    month: 3000,
    price: [
      {
        "price-title": "Custom proposal & timeline",
        id: 1,
      },
      {
        "price-title": "End-to-end creative execution",
        id: 2,
      },
      {
        "price-title": "Strategy consultation",
        id: 3,
      },
      {
        "price-title": "Post-launch support",
        id: 4,
      },
      {
        "price-title": "Full ownership of deliverables",
        id: 5,
      },
      {
        "price-title": "Optional ongoing maintenance",
        id: 6,
      },
    ],
  },
];

type ProductContextType = {
  products: Product[];
  box: BoxCard[];
  cardCaseStudy: CaseStudyItem[];
  pricingCard: PricingCard[];
};

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const value = useMemo(
    () => ({ products: cardItem, box, cardCaseStudy, pricingCard }),
    [],
  );
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
