import { useEffect, useRef } from 'react';

interface AnimationConfig {
  selector: string;
  growIntensity: number;
}

export const useFlexScroll = (configs: AnimationConfig[]) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // حساب مدى تقدم التمرير داخل الحاوية
      const scrollHeight = rect.height - viewportHeight;
      const scrollProgress = Math.min(Math.max(-rect.top / scrollHeight, 0), 1);

      configs.forEach(config => {
        const element = containerRef.current?.querySelector(config.selector) as HTMLElement;
        if (element) {
          // تطبيق القيمة على flexGrow
          const growValue = 1 + (scrollProgress * config.growIntensity);
          element.style.flexGrow = growValue.toString();
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [configs]);

  return containerRef;
};