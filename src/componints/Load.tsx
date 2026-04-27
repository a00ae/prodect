import { memo } from "react";
const loading = ["Averra", "Studio®"];
interface Props {
  load: boolean;
}

const Load = ({ load }: Props) => {
  return (
    <div className={`load ${load ? "is-active" : ""}`}>
      {loading.map((el, index) => (
        <div className="load-text-wrapper" key={index}>
          <span className="load-span">{el.split("").map((ele, i) => (
            <span key={i}>{ele}</span>
          ))}</span>
        </div>
      ))}
    </div>
  );
};

export default memo(Load);
