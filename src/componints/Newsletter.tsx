import { memo } from "react";
import styles from "./css/Newsletter.module.scss";
import Box from "./Nodos/Box";
import { useBoxData } from "./context/BoxProvider";
import { BoxSection } from "./opp/opp";
import Text from "./Nodos/Text";


function Newsletter() {
  const newsletter = useBoxData(BoxSection.Newsletter);
  return (
    <div className={styles["newsletter"]}>
      <div className={styles.container}>
        <Box {...newsletter} isAnimated={true} />
        <div className={styles.email}>
          <Text as="input" type="text" size="md"  />
        </div>
      </div>
    </div>
  );
}

export default memo(Newsletter);
