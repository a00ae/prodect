import {
  RiArrowLeftLongLine,
  RiArrowRightLongLine,
  RiDoubleQuotesR,
} from "@remixicon/react";
import { memo } from "react";
import "../css/ProcessCard.scss";

interface ProcessCardProps {
  id?: number;
  title: string;
  desc: string | object;
  total: number;
  isActive: boolean;
  onNext?: () => void;
  onPrev?: () => void;
}

function ProcessCard({
  id,
  title,
  desc,
  total,
  isActive = false,
  onNext,
  onPrev,
}: ProcessCardProps) {
  return (
    <div className="card-item">
      <div className="nubber-box">
        <p>0{id}</p>

        <div className="atter">
          {!isActive ? (
            Array.from({ length: total }).map((_, index) => (
              <div key={index} className={`dash renk${id}${index + 1}`}></div>
            ))
          ) : (
            <div className="num-arrow">
              <div className="arrow" onClick={onNext}>
                <RiArrowRightLongLine />
              </div>
              <div className="arrow" onClick={onPrev}>
                <RiArrowLeftLongLine />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="text-box">
        <div className="heading">
          {isActive ? <p>"{title}"</p> : <p>{title}</p>}
        </div>
        <div className="descrption">
          <div className="text">
            {typeof desc === "object" && desc !== null ? (
              <div className="images-descrption">
                <div className="img">
                  <img src={(desc as { image: string }).image} alt="" />
                </div>
                <div className="txt">
                  <p>{(desc as { name: string }).name}</p>
                  <p>{(desc as { ["text-desc"]: string })["text-desc"]}</p>
                </div>
              </div>
            ) : (
              <p>{desc}</p>
            )}
          </div>
          <div className="item">
            {!isActive ? <p>0{id}</p> : <RiDoubleQuotesR />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ProcessCard);
