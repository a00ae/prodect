import "./css/About-us.scss";
import Box from "./Nodos/Box";
import { useBoxData } from "./context/BoxProvider";
import { memo } from "react";
import Cards from "./Nodos/Cards";



function AboutUs() {
  console.log("AboutUs");
  const { aboutUs } = useBoxData();

  return (
    <div id="about-us" className="about-us">
      <div className="container">
        <Box
          title={aboutUs.title}
          text={aboutUs.text}
          more={aboutUs.more}
        />
        <Cards/>
      </div>
    </div>
  );
}

export default memo(AboutUs);
