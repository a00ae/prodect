import { memo } from "react";
import Box from "./Nodos/Box";
import Cards from "./Nodos/Cards";
import { boxData } from "./context/data/data";

function WhyUs() {
  const { whyUs } = boxData;
  return (
    <div className="why-us" id="why-us">
      <div className="contaner">
        <Box
          title={whyUs.title}
          text={whyUs.text}
          isAnimated={true}
          highlightWords={whyUs.highlightWords}
        />
        <Cards />
      </div>
    </div>
  );
}

export default memo(WhyUs);
