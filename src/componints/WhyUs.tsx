import { memo } from "react";
import Box from "./Nodos/Box";
import { useBoxData } from "./context/BoxProvider";
import "./css/Why-us.scss";

function WhyUs() {
  const { whyUs } = useBoxData();
  return (
    <div className="why-us" id="why-us">
      <div className="contaner">
        <Box
          title={whyUs.title}
          text={whyUs.text}
          isAnimated={true}
          highlightWords={whyUs.highlightWords}
        />
      </div>
    </div>
  );
}

export default memo(WhyUs);
