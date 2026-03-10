import { RiArrowRightUpLine } from "@remixicon/react";
import ScTitle from "./ScTitle";
import "../css/box.css";
import type { Box } from "../typescript/type";

function Box({ heading, text, more, title }: Box) {
  return (
    <div className="box">
      {title && (
        <ScTitle
          data={title.data}
          title={title.title}
          projects={title.projects}
        />
      )}
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
