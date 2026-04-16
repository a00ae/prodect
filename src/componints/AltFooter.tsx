import styles from "./css/footer.module.scss";
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

const wedght = [
  "Home",
  "Studio",
  "Projects",
  "Blog",
  "Content",
  "Privacy Policy",
  "Terms & Connditions",
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
        {/* <div > */}
        <ul className={styles["media-bottom"]}>
          {media.map((ele, index) => (
            <li key={index}>{ele}</li>
          ))}
        </ul>
        {/* </div> */}
      </div>
      <div className={styles["wedght-footer"]}>
        <ul>
          <li className={styles["tilte-footer"]}>pages</li>
          {wedght.slice(0, 5).map((item, i) => (
            <li key={i}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>

        <ul>
          <li className={styles["tilte-footer"]}>legal</li>
          {wedght.slice(5).map((ele, index) => (
            <li key={index}>
              <a href="#">{ele}</a>
            </li>
          ))}
        </ul>
        <div className={styles["sction-title"]}>
          <p>© 2025 All rights reserved.</p>
          <div className={styles["child-sction-title"]}>
            <p>Built in</p>
            <a href="#">Framer</a>
            <p>By</p>
            <a href="#">Thear</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AltFooter;
