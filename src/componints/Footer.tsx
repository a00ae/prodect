import { memo } from "react";
import styles from "./css/footer.module.scss";
import Text from "./Nodos/Text";

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
