import styles from "./css/footer.module.scss"
import {
  RiDribbbleLine,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXLine,
} from "@remixicon/react";

const media = [
  <RiTwitterXLine />,
  <RiInstagramLine />,
  <RiDribbbleLine />,
  <RiLinkedinFill />,
];
const AltFooter = () => {
  return (
    <div className={styles["alt-footer"]}>
      <div className={styles["descrption-footer"]}>
        <div className={styles["top-footer"]}>
          <h3>Averra Studio®</h3>
          <p>
            Whether you need a bold new identity, a sleek website, or creative
            strategy, Scarlet is here to bring your vision to life.
          </p>
        </div>
        <div className={styles["media-bottom"]}>
          <ul>
            {media.map((ele, index) => (
              <li key={index}>{ele}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AltFooter;
