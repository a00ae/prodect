import { useRef } from "react";
import styles from "./css/OurTheam.module.scss";
import Box from "./Nodos/Box";
import Btn from "./Nodos/Btn";
import Cards from "./Nodos/Cards";

import { useScrollVisibility } from "./Hooks/useViewHooks";
import { boxData } from "./context/data/data";
function OurTheam() {
  const { ourTeam } = boxData;
  const ref = useRef<HTMLDivElement>(null);

  useScrollVisibility(ref, `.${styles.container}`);
  return (
    <div className={styles["our-theam"]}>
      <div ref={ref} className={styles.container}>
        <Box
          title={ourTeam.title}
          isAnimated={true}
          highlightWords={ourTeam.highlightWords}
          text={ourTeam.text}
        />

        <Cards />

        <div className={styles["text-descrption"]}>
          <p>
            We're a team of innovators who blend creativity with strategy to
            make brands unforgettable.
          </p>
          <Btn color="white" size="md" title={ourTeam.buttonText || ""} />
        </div>
      </div>
    </div>
  );
}

export default OurTheam;
