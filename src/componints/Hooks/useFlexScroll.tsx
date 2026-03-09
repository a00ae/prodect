import { useEffect, useRef } from "react";

interface AnimationConfig {
  selector: string;
  speed: number; // Positive for right, negative for left
}

export const useFlexScroll = (configs: AnimationConfig[]) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const animatedElements = configs
      .map((config) => {
        const element = containerRef.current!.querySelector(
          config.selector,
        ) as HTMLElement;
        if (!element) return null;

        // The width of the content to be looped is half of the total width,
        // as we have duplicated the content.
        const loopWidth = element.scrollWidth / 2;
        return { element, loopWidth, speed: config.speed };
      })
      .filter((item): item is NonNullable<typeof item> => item !== null);

    if (animatedElements.length === 0) {
      return;
    }

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate a scroll progress value that is not clamped between 0 and 1.
      const scrollableDist = rect.height + viewportHeight;
      const progress = (viewportHeight - rect.top) / scrollableDist;

      // A large multiplier to ensure the translation is large enough to loop.
      const VIRTUAL_SCROLL_DISTANCE = 5000;

      animatedElements.forEach(({ element, loopWidth, speed }) => {
        const baseTranslate = progress * VIRTUAL_SCROLL_DISTANCE * speed;
        let finalTranslate;

        if (speed < 0) {
          // For leftward movement, loop from 0 to -loopWidth.
          finalTranslate = baseTranslate % loopWidth;
        } else {
          // For rightward movement, loop from -loopWidth to 0.
          finalTranslate = (baseTranslate % loopWidth) - loopWidth;
        }

        element.style.transform = `translateX(${finalTranslate}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Set initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, [configs]);

  return containerRef;
};
