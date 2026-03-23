import { RiStarFill } from "@remixicon/react";
import { memo, type ReactNode } from "react";
import "./Scss/Rate.scss"
interface Rate {
    rate: string | ReactNode;
    span?: string;
}

function Rate({rate}: Rate) {
  return (
    <div className="rate">
      <div>
        {Array.from(new Array(5)).map((_, index) => (
          <RiStarFill key={index} color="#fc4040" />
        ))}
        <span>4.9/5</span>
      </div>
      <p>
        {rate}
      </p>
    </div>
  );
}

export default memo(Rate);
