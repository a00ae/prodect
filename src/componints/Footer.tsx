import { memo } from "react";
import styles from "./css/footer.module.scss";
import Text from "./Nodos/Text";
import  img from "../../public/footer/footer-01.avif"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Text className="h2" size="lg" as="h2">
            Ready to start a new project?
          </Text>
          <Text className="p" size="md" as="p">
            Averra Studio®
          </Text>
        </div>
        <div className={styles.content}>
            <div className={styles["about-my"]}>
                <div className={styles["top-card"]}>
                <p><span>Your next chapter starts here.</span> Work with Averra to craft design and strategy that move your brand forward.</p>
                <div className={styles["card-image"]}>
                  <div className={styles["image"]}>
                    <img src={img}  alt=""/>
                  </div>
                  <div className={styles["box-desc"]}>
                    <p>Lorian Hans</p>
                    <p>Founder & Creative Director</p>
                  </div>

                </div>

                </div>
                <div className={styles["bottom-card"]}>

                <p>0 (212) 730 4650</p>
                <p>hello@avera.com</p>
                </div>
            </div>
            <div className={styles.form}>

            </div>
            .
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
