import { RiArrowRightUpLine } from "@remixicon/react";
import "./css/About-us.css";
import { useFlexScroll } from "./Hooks/useFlexScroll";
import ScTitle from "./Nodos/ScTitle";
import type { BoxType } from "./typescript/type";
import Box from "./Nodos/Box";

const animations = [
  // الشريط الأول: يتحرك بشكل لا نهائي لليسار
  { selector: ".sticky-wrapper.one", speed: -0.1 },
  // الشريط الثاني: يتحرك بشكل لا نهائي لليمين
  { selector: ".sticky-wrapper.two", speed: 0.1 },
];

const boxTilte: BoxType = {
  text: "We blend bold creativity with strategic insight to help brands lead in the digital age.",
  more: "More about us",
  title: {
    data: "01",
    title: "About us",
    heading: "Averra is a digital agency that help brands stand out and scale with bold design and smart marketing.",
    projects: "© 2025"
  }
}

function AboutUs() {
  const containerRef = useFlexScroll(animations);

  return (
    <div id="about-us" className="about-us">
      <div className="container">
        <Box title={boxTilte.title}  text={boxTilte.text} more={boxTilte.more}/>
        <div className="tamblate-card" ref={containerRef}>
          <div className="sticky-wrapper one">
            <div className="grid-card card-1"></div>
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
            {/* --- نسخة مكررة للتمرير اللانهائي --- */}
            <div className="grid-card card-1"></div>
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
          </div>

          <div className="sticky-wrapper two">
            <div className="grid-card card-5"></div>
            <div className="grid-card card-6">
              <div className="content">
                <div className="number">
                  150<span>+</span>
                </div>
                <div className="label">Projects completed</div>
              </div>
            </div>
            <div className="grid-card card-7"></div>
            <div className="grid-card card-8">
              <div className="content">
                4.9 <span>Rating</span>
              </div>
            </div>
            {/* --- نسخة مكررة للتمرير اللانهائي --- */}
            <div className="grid-card card-5"></div>
            <div className="grid-card card-6">
              <div className="content">
                <div className="number">
                  150<span>+</span>
                </div>
                <div className="label">Projects completed</div>
              </div>
            </div>
            <div className="grid-card card-7"></div>
            <div className="grid-card card-8">
              <div className="content">
                4.9 <span>Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
