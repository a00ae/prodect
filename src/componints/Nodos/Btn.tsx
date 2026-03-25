import { RiArrowRightUpLine } from "@remixicon/react";
import "./Scss/btn.scss";
type TitleBtn = {
  title: string;
  size?: "full" | "md" | "sm";
  color?: "defult" | "black" | "blue" | "white";
};

function Btn({ title, size = "full", color = "defult" }: TitleBtn) {
  return (
    <a className={`btn-web ${size} ${color}`} href="#">
      <div className="start">
        <p data-text={title}>{title}</p>
      </div>
      <div className="end">
        <RiArrowRightUpLine />
      </div>
    </a>
  );
}

export default Btn;
