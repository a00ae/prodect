import { RiDoubleQuotesR } from "@remixicon/react";
import { memo } from "react";
import "../css/ProcessCard.scss";

interface ProcessCardProps {
  id?: number;
  title: string;
  desc: string;
  total: number;
  isActive?: boolean;
}

function ProcessCard({ id, title, desc, total, isActive = false }: ProcessCardProps) {
  return (
    <div className="card-item">
      <div className="nubber-box">
        <p>0{id}</p>

        <div className="atter">
          {Array.from({ length: total }).map((_, index) => (
            <div key={index} className={`dash renk${id}${index + 1}`}></div>
          ))}
        </div>
      </div>
      <div className="text-box">
        <div className="heading">
          <p>{title}</p>
        </div>
        <div className="descrption">
          <div className="text">
            <p>{desc}</p>
          </div>
          <div className="item">
            {!isActive ? (
              <p>0{id}</p>
            ) : (
              <p>
                <RiDoubleQuotesR />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ProcessCard);
