import { useBoxData } from "./context/BoxProvider";
import Box from "./Nodos/Box";
import "./css/Process.scss";
import { memo } from "react";
import ProcessList from "./Nodos/ProcessList";
import { BoxSection } from "./opp/opp";

function Process() {
  const process = useBoxData(BoxSection.Process);

  return (
    <div className="process" id="process">
      <div className="container">
        <Box
          moreLink={process.moreLink}
          title={process.title}
          text={process.text}
        />

        <ProcessList />
      </div>
    </div>
  );
}

export default memo(Process);
