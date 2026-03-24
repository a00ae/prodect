import { RiArrowRightUpLine } from "@remixicon/react";
import "./Scss/btn.scss"

function Btn() {
  return (
    <a className="btn-web" href="#">
      <div className="start">
        <p>Start a Project</p>
      </div>
      <div className="end">
        <RiArrowRightUpLine />
      </div>
    </a>
  );
}

export default Btn;
