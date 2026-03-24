import { useMemo } from "react";

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
        id: 5,
        title: "What sets Averra apart is their balance of creativity and strategy. They didn’t just give us a beautiful website, they built a digital experience that drives results",
        desc: {
          image: "",
          name: "Sophia",
          "text-desc": "Founder, Luxe Interiors",
        },
      },
    ],
    [],
  );

  return { processData, testimonialsData };
};
