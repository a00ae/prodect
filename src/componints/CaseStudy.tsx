import { useBoxData } from "./context/BoxProvider";
import { useProducts } from "./context/ProductProvider";
import styles from "./css/CaseStudy.module.scss";
import Box from "./Nodos/Box";
type Props = {};

const CaseStudy = (props: Props) => {
  const { caseStudy } = useBoxData();
  const { cardCaseStudy } = useProducts();
  return (
    <div className={styles["case-study"]}>
      <div className={styles.container}>
        <Box title={caseStudy.title} more={caseStudy.more} />

        <div className={styles["card-item"]}>
          {cardCaseStudy
            .slice(0, 3)
            .map(({ id, desc, title, img, isActive }) => (
              <div key={id} className={styles["box-container"]}>
                <div className={styles.top}>
                  <p>{title}</p>
                </div>
                <div className={styles.bottom}>
                  {isActive == "img2" ? (
                    <>
                      <div className={styles.image}>
                        <img src={img} alt="" />
                      </div>
                      <div className={styles["text-desc"]}>
                        <p>{desc[0]}</p>
                        <p>{desc[1]}</p>
                      </div>
                    </>
                  ) : (
                    <p>{desc}</p>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
