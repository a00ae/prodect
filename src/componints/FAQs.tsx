import { memo, useState } from "react";
import { useBoxData } from "./context/BoxProvider";
import Box from "./Nodos/Box";
import { BoxSection } from "./opp/opp";
import styles from "./css/FAQs.module.scss";
import { RiAddLine } from "@remixicon/react";

const FAQs = () => {
  const faqsData = useBoxData(BoxSection.FAQs);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = [
    {
      id: "01",
      question: "What industries do you specialize in?",
      answer:
        "We work across a range of industries, from tech and e-commerce to lifestyle and creative brands, bringing a refined, modern aesthetic and strategic edge to every project.",
    },
    {
      id: "02",
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on the scope. A brand identity usually takes 3-4 weeks, while a full website redesign can take 6-8 weeks.",
    },
    {
      id: "03",
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes, we provide post-launch support and maintenance packages to ensure your digital products stay updated and continue to perform at their best.",
    },
    {
      id: "04",
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes, we provide post-launch support and maintenance packages to ensure your digital products stay updated and continue to perform at their best.",
    },
    {
      id: "05",
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes, we provide post-launch support and maintenance packages to ensure your digital products stay updated and continue to perform at their best.",
    },
    {
      id: "06",
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes, we provide post-launch support and maintenance packages to ensure your digital products stay updated and continue to perform at their best.",
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.faqs}>
      <div className={styles.container}>
        <Box {...faqsData} />
        <div className={styles["accordion"]}>
          {faqItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleToggle(index)}
              className={`${styles["accordion-faqs"]} ${activeIndex === index ? styles["is-active"] : ""}`}>
              <div className={styles.top}>
                <div className={styles["firset-cheld-title"]}>
                  <p>{item.id}</p>
                  <p>|</p>
                  <p>{item.question}</p>
                </div>
                <div className={styles.icon}>
                  <RiAddLine />
                </div>
              </div>

              <div className={styles.wrapper}>
                <div className={styles.inner}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(FAQs);
