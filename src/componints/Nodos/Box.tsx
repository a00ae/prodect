import { RiArrowRightUpLine } from "@remixicon/react";
import ScTitle from "./ScTitle";
import "../css/box.scss";
import type { BoxType } from "../opp/opp";

function Box({
  text,
  more,
  title,
  className,
  isAnimated = false,
}: BoxType & { className?: string; isAnimated?: boolean }) {
  return (
    <div className={["box", className].filter(Boolean).join(" ")}>
      {title && (
        <ScTitle
          data={title.data}
          title={title.title}
          projects={title.projects}
        />
      )}
      {!title.heading ? null : (
        <h2>
          {isAnimated
            ? title.heading
                .toString()
                .split(" ")
                .map((ele, index) => <span key={index}>{ele}</span>)
            : title.heading}
        </h2>
      )}
      {!text ? null : (
        <p>
          {isAnimated ? text.split("").map((ele, index) => {
            if (ele === " ") return " ";
            return <span key={index}>{ele}</span>;
          }) : text}
        </p>
      )}
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
