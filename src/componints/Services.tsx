import Box from "./Nodos/Box";
import { memo, useState } from "react";
import { useBoxData } from "./context/BoxProvider";
import "./css/Services.scss";
import { RiArrowDownSLine } from "@remixicon/react";
import "../../public/image-shopping/branding-01.avif";

function Services() {
  console.log("Services");
  const { services } = useBoxData();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Branding",
      details:
        "We build distinctive brands that resonate with your audience and stand the test of time.",
      ui: [
        "Brand Identity Design",
        "Logo & Visual Systems",
        "Brand Guidelines & Collateral",
        "Digital Asset Creation",
      ],
    },
    {
      title: "Product Design",
      details:
        "User-centric design solutions that solve real problems and delight your customers.",
      ui: [
        "Brand Identity Design",
        "Logo & Visual Systems",
        "Brand Guidelines & Collateral",
        "Digital Asset Creation",
      ],
    },
    {
      title: "Development",
      details:
        "Robust, scalable, and high-performance development to power your digital growth.",
      ui: [
        "Brand Identity Design",
        "Logo & Visual Systems",
        "Brand Guidelines & Collateral",
        "Digital Asset Creation",
      ],
    },
    {
      title: "Content Strategy",
      details:
        "Strategic content creation that drives engagement and tells your brand's unique story.",
      ui: [
        "Brand Identity Design",
        "Logo & Visual Systems",
        "Brand Guidelines & Collateral",
        "Digital Asset Creation",
      ],
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
          highlightWords={services.highlightWords}
        />
        <div className="box-card-accordion">
          <div className="text-branding">
            <h2>(01)</h2>

            <div className="image">
              <p>Branding</p>
              <img src="../../public/image-shopping/branding-01.avif" alt="" />
            </div>
          </div>

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
                  <RiArrowDownSLine />
                </div>
                <div className="dashad"></div>
                <div className="details-wrapper">
                  <div className="details-inner">
                    <p>{item.details}</p>
                    <div className="btn-ui">
                      {item.ui.map((prevs, i) => (
                        <div className="grid-item-ui" key={i}>
                          <div className="prevs-button-ui">
                            <span>{prevs}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Services);
