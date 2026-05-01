import { memo } from "react";
interface Props {
  load: boolean;
}

const Load = ({ load }: Props) => {
  return (
    <div className={`load ${load ? "is-active" : ""}`}>
      {("Averra Studio®").split("").map((el, index) => (
        <div className="load-text-wrapper" key={index}>
          <span className="load-span">
            {el.split("").map((ele, i) => {
              const delay = index * 0.1 + i * 0.3;
              return <span key={i} style={{
                animationDelay: `${delay}s`
              }}>{ele}</span>;
            })}
          </span>
        </div>
      ))}
    </div>
  );
};

export default memo(Load);
