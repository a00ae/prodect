import { useBoxData } from "./context/BoxProvider";
import styles from "./css/OurTheam.module.scss";
import Box from "./Nodos/Box";
function OurTheam() {
  const { ourTheam } = useBoxData();
  return (
    <div className={styles["our-theam"]}>
      <div className={styles.container}>
        <Box
          title={ourTheam.title}
          isAnimated={true}
          highlightWords={ourTheam.highlightWords}
          text={ourTheam.text}
        />
      </div>
    </div>
  );
}

export default OurTheam;
