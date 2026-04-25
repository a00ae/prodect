import "./css/About-us.scss";
import Box from "./Nodos/Box";
import { memo } from "react";
import Cards from "./Nodos/Cards";
import { boxData } from "./context/data/data";

function AboutUs() {
  console.log("AboutUs");
  const { aboutUs } = boxData;

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
