import Box from "./Nodos/Box";
import { memo } from "react";
import { useBoxData } from "./context/BoxProvider";
import "./css/Services.scss"

function Services() {
  console.log("Services");
  const { services } = useBoxData();
  return (
    <div className="services" id="services">
      <div className="container">
        <Box
          title={services.title}
          more={services.more}
          text={services.text}
          isAnimated={true}
        />
      </div>
    </div>
  );
}

export default memo(Services);
