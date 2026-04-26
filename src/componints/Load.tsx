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
          <span>{el}</span>
        </div>
      ))}
    </div>
  );
};

export default memo(Load);
