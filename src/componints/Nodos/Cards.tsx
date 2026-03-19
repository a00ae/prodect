import { useFlexScroll } from "../Hooks/useFlexScroll";
import "./Scss/cards.scss"


const animations = [
  // الشريط الأول: يتحرك بشكل لا نهائي لليسار
  { selector: ".sticky-wrapper.one", speed: -0.1 },
  // الشريط الثاني: يتحرك بشكل لا نهائي لليمين
  { selector: ".sticky-wrapper.two", speed: 0.1 },
];

function Cards() {
const containerRef = useFlexScroll(animations)
  return (
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
  );
}

export default Cards;
