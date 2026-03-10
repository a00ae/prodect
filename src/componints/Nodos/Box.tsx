import { RiArrowRightUpLine } from "@remixicon/react";
import ScTitle from "./ScTitle";
import "../css/box.css";
import type { Box } from "../typescript/type";

function Box({ heading, text, more }: Box) {
  return (
    <div className="box">
      <ScTitle className="title" data="01" title="About us" projects="© 2025" />
      <h2>{heading}</h2>

      {!text ? null : <p>{text}</p>}
      
      <div className="btn">
        <div>
          <a href="#">
            <p>{more}</p> <RiArrowRightUpLine />
          </a>
          <div className="btn-border"></div>
        </div>
      </div>
    </div>
  );
}

export default Box;
