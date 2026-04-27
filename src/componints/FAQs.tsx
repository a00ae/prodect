import { memo, useRef, useState } from "react";
import Box from "./Nodos/Box";
import styles from "./scss/FAQs.module.scss";
import { RiAddLine } from "@remixicon/react";
import { useScrollVisibility } from "./Hooks/useViewHooks";
import { boxData } from "./context/data/data";

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
    question: "How do you manage communication and revisions?",
    answer:
      "All communication is centralized through your dedicated project manager or workspace. We offer unlimited revisions within the project scope to ensure complete satisfaction.",
  },
  {
    id: "05",
    question: "How quickly will I receive completed work?",
    answer:
      "Turnaround times vary depending on the request, but most tasks are completed within 2–5 business days. Larger projects may take longer and will include a custom timeline.",
  },
  {
    id: "06",
    question: "Can I switch or cancel my plan anytime?",
    answer:
      "Yes. You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
];

const FAQs = () => {
  console.log("FAQs");
  const { faqs } = boxData;
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // تم تغيير القيمة الافتراضية إلى 0
  const refcurrent = useRef<HTMLDivElement>(null!);

  useScrollVisibility(refcurrent, `.${styles.container}`);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.faqs}>
      <div ref={refcurrent} className={styles.container}>
        <Box {...faqs} />
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
