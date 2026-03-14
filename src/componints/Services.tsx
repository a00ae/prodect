import Box from "./Nodos/Box";
import { memo, useState } from "react";
import { useBoxData } from "./context/BoxProvider";
import "./css/Services.scss";
import { RiArrowDownSLine, RiArrowDownWideLine } from "@remixicon/react";

function Services() {
  console.log("Services");
  const { services } = useBoxData();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Branding",
      details: "We build distinctive brands that resonate with your audience and stand the test of time.",
    },
    {
      title: "Product Design",
      details: "User-centric design solutions that solve real problems and delight your customers.",
    },
    {
      title: "Development",
      details: "Robust, scalable, and high-performance development to power your digital growth.",
    },
    {
      title: "Content Strategy",
      details: "Strategic content creation that drives engagement and tells your brand's unique story.",
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="services" id="services">
      <div className="container">
        <Box
          title={services.title}
          more={services.more}
          text={services.text}
          isAnimated={true}
        />
        <div className="accordion">
          {items.map((item, index) => (
            <div
              className={`accordion__container ${activeIndex === index ? "is-active" : ""}`}
              key={index}
              onClick={() => handleToggle(index)}>
              <div className="title">
                <h3>{item.title}</h3>
              </div>
              <div className="icon-drop-down">
                < RiArrowDownSLine  />
              </div>
              <div className="details-wrapper">
                <div className="details-inner">
              <div className="dashad"></div>
                  <p>{item.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Services);
