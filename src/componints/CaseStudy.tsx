import { useBoxData } from "./context/BoxProvider";
import { useProducts } from "./context/ProductProvider";
import styles from "./css/CaseStudy.module.scss";
import Box from "./Nodos/Box";
import { BoxSection } from "./opp/opp";

const CaseStudy = () => {
  const  caseStudy = useBoxData(BoxSection.CaseStudy);
  const { cardCaseStudy } = useProducts();
  return (
    <div className={styles["case-study"]}>
      <div className={styles.container}>
        <Box title={caseStudy.title} moreLink={caseStudy.moreLink} />


        <div className={styles.card}>

        <div className={styles["card-item"]}>
          {cardCaseStudy
            .slice(0, 3)
            .map(({ id, desc, title, img, isActive }) => (
              <div
                key={id}
                className={`${styles["box-container"]} ${isActive == "img1" ? styles[isActive] : ""}`}>
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
                        <p>{Array.isArray(desc) ? desc[0] : ""}</p>
                        <p>{Array.isArray(desc) ? desc[1] : ""}</p>
                      </div>
                    </>
                  ) : (
                    <p>{desc}</p>
                  )}
                </div>
              </div>
            ))}
        </div>
        <div className={styles["global-card"]}>
            {cardCaseStudy.slice(3,).map((prev) => (
                <div key={prev.id} className={styles["card-sm"]}>
                    <div className={styles.top}>
                        <p>{prev.title}</p>
                        <span>{prev.id == 6 ? "+" : "%"}</span>
                    </div>
                    <div className={styles.bottom}>
                        <p>{prev.desc}</p>
                    </div>
                </div>
            ))}
        </div>

        </div>

      </div>
    </div>
  );
};

export default CaseStudy;
