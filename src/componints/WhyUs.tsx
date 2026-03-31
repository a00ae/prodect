import { memo } from "react";
import Box from "./Nodos/Box";
import { useBoxData } from "./context/BoxProvider";
import "./css/Why-us.scss";
import Cards from "./Nodos/Cards";
import { BoxSection } from "./opp/opp";

function WhyUs() {
  const whyUs  = useBoxData(BoxSection.WhyUs);
  return (
    <div className="why-us" id="why-us">
      <div className="contaner">
        <Box
          title={whyUs.title}
          text={whyUs.text}
          isAnimated={true}
          highlightWords={whyUs.highlightWords}
        />
        <Cards/>
      </div>
      
    </div>
  );
}

export default memo(WhyUs);
