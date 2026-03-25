import { useBoxData } from "./context/BoxProvider";
import styles from "./css/CaseStudy.module.scss";
import Box from "./Nodos/Box";
type Props = {};

const CaseStudy = (props: Props) => {
  const { caseStudy } = useBoxData();
  return (
    <div className={styles["case-study"]}>
      <div className={styles.container}>
        <Box title={caseStudy.title} more={caseStudy.more} />

        <div className={styles["card-item"]}>
          <div className={styles["box-container"]}>
            <div className={styles.top}>
              <p>Overview</p>
            </div>
            <div className={styles.bottom}>
              <p>
                Crafted a refined digital identity and eCommerce experience for
                a luxury skincare brand, resulting in a 180% increase in online
                conversions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
