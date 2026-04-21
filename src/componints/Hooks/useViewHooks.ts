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
  selector: string,
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // تحسين الأداء: التوقف عن مراقبة العنصر بعد أن يصبح مرئياً
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // تقليل العتبة لضمان التفعيل بمجرد ظهور جزء بسيط جداً من العنصر
        threshold: 0.01,
        // تقليل الهامش السالب أو إزالته لضمان التفعيل في نهاية الصفحة
        rootMargin: "0px 0px -10px 0px",
      },
    );

    if (ref.current) {
      // محاولة البحث عن الأبناء
      const elements = selector ? ref.current.querySelectorAll(selector) : [];

      if (elements.length > 0) {
        elements.forEach((el) => observer.observe(el));
      } else {
        // إذا لم يوجد selector أو لم يتم العثور على أبناء، نراقب الـ container نفسه
        observer.observe(ref.current);
      }
    }

    return () => observer.disconnect();
  }, [ref, selector]);
};
