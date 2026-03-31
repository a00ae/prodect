import { useBoxData } from "./context/BoxProvider";
import styles from "./css/OurTheam.module.scss";
import Box from "./Nodos/Box";
import Btn from "./Nodos/Btn";
import Cards from "./Nodos/Cards";
import { BoxSection } from "./opp/opp";
function OurTheam() {
  const  ourTheam  = useBoxData(BoxSection.OurTeam);
  return (
    <div className={styles["our-theam"]}>
      <div className={styles.container}>
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
