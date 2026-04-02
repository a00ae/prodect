import { BoxSection, type BoxContextType } from "../../opp/opp";

export const boxData: BoxContextType = {
  [BoxSection.AboutUs]: {
    text: "We blend bold creativity with strategic insight to help brands lead in the digital age.",
    moreLink: "more about us",
    title: {
      id: "01",
      label: "About us",
      heading:
        "Averra is a digital agency that help brands stand out and scale with bold design and smart marketing.",
      subText: "© 2025",
    },
  },
  [BoxSection.ShoppingCart]: {
    moreLink: "All projects",
    title: {
      id: "02",
      label: "Featured work",
      subText: "50+ projects",
      heading: "Shaping timeless visual identities.",
    },
  },
  [BoxSection.Services]: {
    moreLink: "See pricing",
    text: "We combine creativity and strategy to deliver digital experiences that elevate brands.",
    title: {
      id: "03",
      label: "Services",
      subText: "Averra®",
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
  [BoxSection.Process]: {
    moreLink: "Lats' talk",
    text: "Every brand has a story, our process is designed to uncover it, shape it, and share it with the world",
    title: {
      id: "04",
      label: "Process",
      heading:
        "Every step is collaborative and tailored to your brand’s goals.",
    },
  },
  [BoxSection.WhyUs]: {
    text: "At Averra, we approach every project project a blend of bold creativity, sharp strategy, and uncompromising attention to detail",
    title: {
      id: "05",
      label: "Why us",
      subText: "Averra®",
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
  [BoxSection.Clients]: {
    title: {
      id: "06",
      label: "Clients",
      subText: "© 2017 - 25",
    },
  },
  [BoxSection.Testimonials]: {
    moreLink: "Leave a review",
    title: {
      id: "07",
      label: "Testimonials",
      heading: "Client Experiences",
      subText: "© 2025",
    },
  },
  [BoxSection.OurTeam]: {
    text: "We're a team of innovators who blend creativity with strategy to make brands unforgettable",
    title: {
      id: "08",
      label: "Our Theam",
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
    buttonText: "About us",
  },
  [BoxSection.CaseStudy]: {
    // text: "Real Impact, Proven Results.",
    moreLink: "Full case study",
    title: {
      id: "09",
      label: "Case study",
      subText: "2024",
      heading: "Real Impact, Proven Results"
    },
  },

  [BoxSection.Pricing]: {
    text: "We offer flexible plans designed to fit your brand’s goals",
    title: {
      id: "010",
      label: "Pricing",
      heading: "Pricing Plans",
      subText: "Averra®",
    }
  },
  [BoxSection.FAQs]: {
    text: "Every brand has a story, our process is designed to uncover it, shape it, and share it with the world.",
    title: {
      id: "11",
      heading: "FAQs",
      label: "FAQs",

    },
    moreLink: "Ask a question",
    
  },
  [BoxSection.Blog]: {
    title: {
      id: "12",
      label: "Blog",
      heading: "Our Blog",
      subText: "Weekly updates"
    },
    moreLink: "All articles",
    highlightWords: ["Our", "Blog"]
  },
  
} as BoxContextType;