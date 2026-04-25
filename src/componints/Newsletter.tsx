import { memo, useRef } from "react";
import styles from "./scss/Newsletter.module.scss";
import Box from "./Nodos/Box";
import Text from "./Nodos/Text";
import { useScrollVisibility } from "./Hooks/useViewHooks";
import { boxData } from "./context/data/data";

function Newsletter() {
  const { newsletter } = boxData;
  const refCurrent = useRef<HTMLDivElement>(null);
  useScrollVisibility(refCurrent, `.${styles.container}`);
  return (
    <div className={styles["newsletter"]}>
      <div ref={refCurrent} className={styles.container}>
        <Box {...newsletter} isAnimated={true} />
        <div className={styles.email}>
          <Text as="input" type="text" size="md" placeholder="Email" />
          <Text size="md" className="button">
            <div className="btn-av">
              <p data-button="Sign up">Sign up</p>
            </div>
          </Text>
        </div>
      </div>
    </div>
  );
}

export default memo(Newsletter);
