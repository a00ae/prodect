import { useRef } from "react";
import { useScrollAnimation } from "./Hooks/useScrollAnimation";
import { useStaticData } from "./Hooks/useStaticData";
import Box from "./Nodos/Box";
import ProcessCard from "./Nodos/ProcessCard";
import ProcessList from "./Nodos/ProcessList";
import Rate from "./Nodos/Rate";
import { useBoxData } from "./context/BoxProvider";
import "./css/Testimonials.scss";

const cardImges = Array.from(
  { length: 4 },
  (_, i) => `/Testimonials/testimonials-0${i + 1}.avif`,
);

function Testimonials() {
  const { testimonials } = useBoxData();
  const { testimonialsData } = useStaticData();
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnimation(ref);

  return (
    <div className="testimonials" id="testimonials">
      <div className="container" ref={ref}>
        <Box title={testimonials.title} more={testimonials.more} />

        <div className="testimonials_card">
          <div className="testimonials_card_item_1">
            <p>
              We’ve had the privilege of partnering with ambitious brands
              worldwide. Here’s how we helped them succeed.
            </p>
            <div className="testimonials_descrption">
              <div className="image_container">
                <div>
                  {cardImges.map((ele, index) => (
                    <div key={index} className="testimoniles_image">
                      <img src={ele} alt="" />
                    </div>
                  ))}
                  <div className="testimoniles_image">
                    <p>95+</p>
                  </div>
                </div>

                <Rate rate="Trusted by our partners" />
              </div>
            </div>
          </div>
          {testimonialsData.map((data) => (
            <ProcessCard
              key={data.id}
              id={data.id}
              title={data.title}
              desc={data.desc["text-desc"]}
              total={testimonialsData.length}
              isActive={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
