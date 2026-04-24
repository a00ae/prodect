import { useRef } from "react";
import { useBoxData } from "./context/BoxProvider";
import styles from "./css/OurTheam.module.scss";
import Box from "./Nodos/Box";
import Btn from "./Nodos/Btn";
import Cards from "./Nodos/Cards";
import { BoxSection } from "./opp/opp";
import { useScrollVisibility } from "./Hooks/useViewHooks";
function OurTheam() {
  const  ourTheam  = useBoxData(BoxSection.OurTeam);
  const ref = useRef<HTMLDivElement>(null);

  useScrollVisibility(ref, `.${styles.container}`)
  return (
    <div  className={styles["our-theam"]}>
      <div ref={ref} className={styles.container}>
        <Box
          title={ourTheam.title}
          isAnimated={true}
          highlightWords={ourTheam.highlightWords}
          text={ourTheam.text}
        />

        <Cards />

        <div className={styles["text-descrption"]}>
          <p>
            We're a team of innovators who blend creativity with strategy to
            make brands unforgettable.
          </p>
          <Btn color="white" size="md" title={ourTheam.buttonText || ""}/>
        </div>
      </div>
    </div>
  );
}

export default OurTheam;
