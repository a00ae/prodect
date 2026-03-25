import { useBoxData } from "./context/BoxProvider";
import styles from "./css/CaseStudy.module.scss";
import Box from "./Nodos/Box";
type Props = {};

const CaseStudy = (props: Props) => {
  const { caseStudy } = useBoxData();
  return (
    <div className={styles["case-study"]}>
      <div className={styles.container}>
        <Box
          title={caseStudy.title}
          more={caseStudy.more}  
        />

        <div className={styles["card-item"]}></div>
      </div>
    </div>
  );
};

export default CaseStudy;
