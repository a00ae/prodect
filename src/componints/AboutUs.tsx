import "./css/About-us.scss";
import Box from "./Nodos/Box";
import { useBoxData } from "./context/BoxProvider";
import { memo } from "react";
import Cards from "./Nodos/Cards";
import { BoxSection } from "./opp/opp";

function AboutUs() {
  console.log("AboutUs");
  const aboutUs = useBoxData(BoxSection.AboutUs);

  return (
    <div id="about-us" className="about-us">
      <div className="container">
        <Box
          title={aboutUs.title}
          text={aboutUs.text}
          moreLink={aboutUs.moreLink}
          
        />
        <Cards />
      </div>
    </div>
  );
}

export default memo(AboutUs);
