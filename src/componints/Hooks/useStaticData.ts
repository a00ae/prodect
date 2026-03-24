import { useMemo } from "react";

const testimonialsImges = Array.from(
  { length: 4 },
  (_, i) => `/Testimonials/card/name-0${i + 1}.avif`,
);


export const useStaticData = () => {
  // يمكنك إضافة مصفوفات بيانات أخرى هنا مستقبلاً
  const processData = useMemo(
    () => [
      {
        id: 1,
        title: "Immersion",
        desc: "We dive deep into your world, exploring your brand, your market, and your audience until we see what others don’t",
      },
      {
        id: 2,
        title: "Vision Crafting",
        desc: "Together, we define a clear creative and strategic direction that becomes the foundation for every design and campaign",
      },
      {
        id: 3,
        title: "Creative Alchemy",
        desc: "Ideas turn into experiences. We blend bold design, smart marketing, and innovative thinking to craft work that stands apart",
      },
      {
        id: 4,
        title: "Launch with Impact",
        desc: "Every detail matters. We roll out your brand or campaign with precision, ensuring maximum reach and resonance",
      },
    ],
    [],
  );
  const testimonialsData = useMemo(
    () => [
      {
        id: 1,
        title:
          "What sets Averra apart is their balance of creativity and strategy. They didn’t just give us a beautiful website, they built a digital experience that drives results",
        desc: {
          image: testimonialsImges[0],
          name: "Sophia",
          "text-desc": "Founder, Luxe Interiors",
        },
      },
      {
        id: 2,
        title:
          "The team at Averra transformed our vision into a reality. Their strategic approach is unmatched.",
        desc: {
          image: testimonialsImges[1] || testimonialsImges[0],
          name: "Michael",
          "text-desc": "CEO, TechFlow",
        },
      },
      {
        id: 3,
        title:
          "Incredible attention to detail and a seamless design process. Highly recommended for any serious brand.",
        desc: {
          image: testimonialsImges[2] || testimonialsImges[0],
          name: "Sarah",
          "text-desc": "Marketing Dir, GreenEarth",
        },
      },
    ],
    [],
  );

  return { processData, testimonialsData };
};
