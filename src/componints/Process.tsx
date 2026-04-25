import Box from "./Nodos/Box";
import "./css/Process.scss";
import { memo } from "react";
import ProcessList from "./Nodos/ProcessList";
import { boxData } from "./context/data/data";

function Process() {
  const { process } = boxData;

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
