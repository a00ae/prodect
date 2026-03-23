import { useState, useEffect, type RefObject } from "react";

// هوك للتحكم في الحالة بناءً على عرض الشاشة
export const useResponsiveToggle = (breakpoint: number) => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isOpen;
};

// هوك لإضافة كلاس عند ظهور العنصر في الشاشة
export const useScrollVisibility = (
  ref: RefObject<HTMLElement>,
  selector: string
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = ref.current?.querySelectorAll(selector);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ref, selector]);
};
