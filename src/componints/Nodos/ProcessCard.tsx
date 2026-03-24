import {
  RiArrowLeftLongLine,
  RiArrowRightLongLine,
  RiDoubleQuotesR,
} from "@remixicon/react";
import { memo } from "react";
import styles from "../css/ProcessCard.module.scss";

interface ProcessCardProps {
  id?: number;
  title: string;
  desc: string | object;
  total: number;
  isActive?: boolean;
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
    <div className={`${styles["process-card"]} process-card`}>
      <div className={styles["nubber-box"]}>
        <p>0{id}</p>

        <div className={styles.atter}>
          {!isActive ? (
            Array.from({ length: total }).map((_, index) => (
              <div
                key={index}
                className={`${styles.dash} ${styles[`renk${id}${index + 1}`]}`}></div>
            ))
          ) : (
            <div className={styles["num-arrow"]}>
              <div className={styles.arrow} onClick={onNext}>
                <RiArrowRightLongLine />
              </div>
              <div className={styles.arrow} onClick={onPrev}>
                <RiArrowLeftLongLine />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={`${styles["text-box"]} text-box`}>
        <div className={styles.heading}>
          {isActive ? <p>"{title}"</p> : <p>{title}</p>}
        </div>
        <div className={styles.descrption}>
          <div className={styles.text}>
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
          <div className={styles.item}>
            {!isActive ? <p>0{id}</p> : <RiDoubleQuotesR />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ProcessCard);
