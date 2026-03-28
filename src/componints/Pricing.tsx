import { useBoxData } from "./context/BoxProvider";
import styles from "./css/Pricing.module.scss";
import Box from "./Nodos/Box";
type Props = {};

function Pricing({}: Props) {
  const { pricing } = useBoxData();
  return (
    <div className={styles.pricing}>
      <div className={styles.container}>
        <Box title={pricing.title} text={pricing.text} />
        <div className="price">
        <div className={styles["price-card"]}>
          <div className={styles["main-card"]}>
            <div className={styles["title-top"]}>
              <p>Basic</p>
              <div>
              <label className={styles.switch}>
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              <p>Yearly</p>
              </div>
            </div>

          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default Pricing;
