import { RiArrowRightUpLine } from "@remixicon/react";
import ScTitle from "./ScTitle";
import "../css/box.scss";
import type { BoxType } from "../opp/opp";
import { useEffect, useRef, useState } from "react";

function Box({
  text,
  more,
  title,
  className,
  isAnimated = false,
  highlightWords = [],
}: BoxType & {
  className?: string;
  isAnimated?: boolean;
  highlightWords?: string[];
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // تشغيل الأنميشن مرة واحدة فقط
        }
      },
      { threshold: 0.2 }, // يعمل عندما يظهر 20% من العنصر
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={boxRef}
      className={["box", className, isVisible ? "is-visible" : ""]
        .filter(Boolean)
        .join(" ")}>
      {title && (
        <ScTitle
          data={title.data}
          title={title.title}
          projects={title.projects}
        />
      )}
      <div className="box-text-heading-container">
        {!title.heading ? null : (
          <h2>
            {isAnimated
              ? title.heading
                  .toString()
                  .split(" ")
                  .map((ele, index) => <span key={index}>{ele}</span>)
              : title.heading}
          </h2>
        )}
        {!text ? null : (
          <div className="description">
            <div className="text-desc">
              <p>
                {isAnimated
                  ? text.split(" ").map((ele, index) => {
                      if (ele === " ") return <span></span>;

                      if (highlightWords.includes(ele)) {
                        return (
                          <span key={index} className="highlight-text">
                            {ele.split("").map((char, i) => {
                              // حساب التأخير الزمني بناءً على ترتيب الكلمة والحرف
                              const delay = index * 0.1 + i * 0.03;
                              return (
                                <span
                                  key={i}
                                  className="char-text"
                                  style={{ animationDelay: `${delay}s` }}>
                                  {char}
                                </span>
                              );
                            })}
                          </span>
                        );
                      }

                      return (
                        <span key={index}>
                          {ele.split("").map((char, i) => {
                            // نفس التأخير للكلمات العادية
                            const delay = index * 0.1 + i * 0.03;
                            return (
                              <span
                                key={i}
                                className="char-text"
                                style={{ animationDelay: `${delay}s` }}>
                                {char}
                              </span>
                            );
                          })}
                        </span>
                      );
                    })
                  : text}
              </p>
            </div>
          </div>
        )}
        {!more ? null : (
          <div className="btn">
            <div>
              <a href="#">
                <p>{more}</p> <RiArrowRightUpLine />
              </a>
              <div className="btn-border"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Box;
