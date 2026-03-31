import { memo } from "react";
import styles from "./css/Blog.module.scss";
import Box from "./Nodos/Box";
import { useBoxData } from "./context/BoxProvider";
import { BoxSection } from "./opp/opp";

const Blog = () => {
  const blog = useBoxData(BoxSection.Blog);
  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <Box {...blog} />

        <div className={styles["card-container"]}>
          <a href="#">
            <div className={styles["text-card"]}>
              <div className={styles.top}>
                <span>Oct 09, 2025</span>
                <h3>How Visual Identity S</h3>
              </div>
              <div className={styles.bottom}>
                <p>
                  A deep dive into how thoughtful visual systems influence
                  customer trust, from color psychology to logo simplicity.
                </p>
              </div>
            </div>
            <div className={styles.image}>{/* <img src="/" alt="" /> */}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(Blog);
