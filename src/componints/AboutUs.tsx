import { RiArrowRightUpLine } from "@remixicon/react";
import "./css/About-us.css";
import { useFlexScroll } from "./Hooks/useFlexScroll";

const animations = [
  // تحريك الشريط الأول من اليسار لليمين (أو العكس حسب القيم)
  { selector: ".sticky-wrapper", startX: -278, endX: 100, growIntensity: 1 },
  // تحريك الشريط الثاني باتجاه معاكس أو سرعة مختلفة
  { selector: ".sticky-wrapper.tow", startX: -100, endX: -400, growIntensity: 1 },
];

function AboutUs() {
  const containerRef = useFlexScroll(animations);

  return (
    <div id="about-us" className="about-us">
      <div className="container">
        <div className="box">
          <div className="title">
            <div>
              <p>01</p>
              <p>|</p>
              <p>About us</p>
            </div>
            <p>© 2025</p>
          </div>
          <h2>
            Averra is a digital agency that help brands stand out and scale with
            bold design and smart marketing.
          </h2>
          <p>
            We blend bold creativity with strategic insight to help brands lead
            in the digital age.
          </p>
          <div className="btn">
            <div>
              <a href="#">
                <p>More about us</p> <RiArrowRightUpLine />
              </a>
              <div className="btn-border"></div>
            </div>
          </div>
        </div>
        <div className="tamblate-card" ref={containerRef}>
          <div className="sticky-wrapper">
            <div className="grid-card card-1"></div>
            <div className="grid-card card-2">
              <div className="content">
                <div className="number">
                  12<span>+</span>
                </div>
                <div className="label">Years of experience</div>
              </div>
            </div>
            <div className="grid-card card-2">
              <div className="content">
                <div className="number">
                  12<span>+</span>
                </div>
                <div className="label">Years of experience</div>
              </div>
            </div>
            <div className="grid-card card-3"></div>
            <div className="grid-card card-4">
              <div className="content">
                95+ <span>Brands</span>
              </div>
            </div>
            <div className="grid-card card-4">
              <div className="content">
                95+ <span>Brands</span>
              </div>
            </div>
            <div className="grid-card card-4">
              <div className="content">
                95+ <span>Brands</span>
              </div>
            </div>
          </div>
          <div className="sticky-wrapper tow">
            <div className="grid-card card-1"></div>
            <div className="grid-card card-2">
              <div className="content">
                <div className="number">
                  12<span>+</span>
                </div>
                <div className="label">Years of experience</div>
              </div>
            </div>
            <div className="grid-card card-2">
              <div className="content">
                <div className="number">
                  12<span>+</span>
                </div>
                <div className="label">Years of experience</div>
              </div>
            </div>
            <div className="grid-card card-3"></div>
            <div className="grid-card card-4">
              <div className="content">
                95+ <span>Brands</span>
              </div>
            </div>
            <div className="grid-card card-4">
              <div className="content">
                95+ <span>Brands</span>
              </div>
            </div>
            <div className="grid-card card-4">
              <div className="content">
                95+ <span>Brands</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
