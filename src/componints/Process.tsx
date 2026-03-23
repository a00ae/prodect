import { useBoxData } from "./context/BoxProvider";
import Box from "./Nodos/Box";
import "./css/Process.scss";
import { memo } from "react";
import ProcessList from "./Nodos/ProcessList";

function Process() {
  const { process } = useBoxData();

  return (
    <div className="process" id="process">
      <div className="container">
        <Box more={process.more} title={process.title} text={process.text} />

        <ProcessList />
      </div>
    </div>
  );
}

export default memo(Process);
