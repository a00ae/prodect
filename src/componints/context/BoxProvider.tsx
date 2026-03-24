import { type ReactNode, createContext, useContext } from "react";
import type { BoxType } from "../opp/opp";

interface BoxContextType {
  aboutUs: BoxType;
  shoppingCart: BoxType;
  services: BoxType;
  process: BoxType;
  whyUs: BoxType;
  clients: BoxType;
  testimonials: BoxType;
  ourTheam: BoxType;
}

const boxData: BoxContextType = {
  aboutUs: {
    text: "We blend bold creativity with strategic insight to help brands lead in the digital age.",
    more: "More about us",
    title: {
      data: "01",
      title: "About us",
      heading:
        "Averra is a digital agency that help brands stand out and scale with bold design and smart marketing.",
      projects: "© 2025",
    },
  },
  shoppingCart: {
    more: "All projects",
    title: {
      data: "02",
      title: "Featured work",
      projects: "50+ projects",
      heading: "Shaping timeless visual identities.",
    },
  },
  services: {
    more: "See pricing",
    text: "We combine creativity and strategy to deliver digital experiences that elevate brands.",
    title: {
      data: "03",
      title: "Services",
      projects: "Averra®",
    },
    highlightWords: [
      "We",
      "combine",
      "creativity",
      "and",
      "strategy",
      "to",
      "deliver",
    ],
  },
  process: {
    more: "Lats' talk",
    text: "Every brand has a story, our process is designed to uncover it, shape it, and share it with the world",
    title: {
      data: "04",
      title: "Process",
      heading:
        "Every step is collaborative and tailored to your brand’s goals.",
    },
  },
  whyUs: {
    text: "At Averra, we approach every project project a blend of bold creativity, sharp strategy, and uncompromising attention to detail",
    title: {
      data: "05",
      title: "Why us",
      projects: "Averra®",
    },
    highlightWords: [
      "At",
      "Averra,",
      "we",
      "approach",
      "every",
      "project",
      "a",
      "blend",
      "of",
    ],
  },
  clients: {
    title: {
      data: "06",
      title: "Clients",
      projects: "© 2017 - 25",
    },
  },
  testimonials: {
    more: "Leave a review",
    title: {
      data: "07",
      title: "Testimonials",
      heading: "Client Experiences",
      projects: "© 2025",
    },
  },
  ourTheam: {
    text: "We're a team of innovators who blend creativity with strategy to make brands unforgettable",
    title: {
      data: "08",
      title: "Our Theam",
    },
    highlightWords: [
      "We're",
      "a",
      "team",
      "of",
      "innovators",
      "who",
      "blend",
      "creativity",
      "with",
      "strategy",
      "to",
    ],
  },
};

const BoxContext = createContext<BoxContextType | null>(null);

export const BoxProvider = ({ children }: { children: ReactNode }) => {
  return <BoxContext.Provider value={boxData}>{children}</BoxContext.Provider>;
};

export const useBoxData = () => {
  const context = useContext(BoxContext);
  if (!context) {
    throw new Error("useBoxData must be used within a BoxProvider");
  }
  return context;
};
