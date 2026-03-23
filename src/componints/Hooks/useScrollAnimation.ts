import { useEffect, RefObject } from "react";

interface ScrollAnimationOptions {
  selector?: string;
  className?: string;
  threshold?: number;
  delayStep?: number;
}

export function useScrollAnimation(
  ref: RefObject<HTMLElement | null>,
  {
    selector = ".card-item",
    className = "visible",
    threshold = 0.15,
    delayStep = 100,
  }: ScrollAnimationOptions = {}
) {
  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll<HTMLElement>(selector);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    elements.forEach((el, index) => {
      el.style.transitionDelay = `${index * delayStep}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ref, selector, className, threshold, delayStep]);
}
