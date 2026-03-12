import { RiArrowRightUpLine } from "@remixicon/react";
import ScTitle from "./ScTitle";
import "../css/box.scss";
import type { BoxType } from "../typescript/type";

function Box({
  text,
  more,
  title,
  className,
}: BoxType & { className?: string }) {
  return (
    <div className={["box", className].filter(Boolean).join(" ")}>
      {title && (
        <ScTitle
          data={title.data}
          title={title.title}
          projects={title.projects}
        />
      )}
      <h2>{title?.heading}</h2>
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
