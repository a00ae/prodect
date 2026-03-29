import { RiCheckboxCircleLine } from "@remixicon/react";
import { useBoxData } from "./context/BoxProvider";
import styles from "./css/Pricing.module.scss";
import Box from "./Nodos/Box";
import Btn from "./Nodos/Btn";
import { useProducts } from "./context/ProductProvider";
type Props = {};

function Pricing({}: Props) {
  const { pricing } = useBoxData();
  const { pricingCard } = useProducts();
  return (
    <div className={styles.pricing}>
      <div className={styles.container}>
        <Box title={pricing.title} text={pricing.text} />
        <div className="price">
          {pricingCard.map(({title, month, desc, price}) => (
            <div key={title} className={styles["price-card"]}>
              <div className="top">
                <div className={styles["title-top"]}>
                  <p>{title}</p>
                  <div>
                    <label className={styles.switch}>
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                    <p>Yearly</p>
                  </div>
                </div>
                <div className={styles["price-componints"]}>
                  <p>${month}</p>
                  <span>/month</span>
                </div>
                <div className={styles["price-desc"]}>
                  <p>
                    {desc}.
                  </p>
                </div>
              </div>
              <div className="dashad"></div>
              <div className="middle">
                <p>What's included:</p>
                {
                  price.map(({id, "price-title": priceTitle}) => (
                <div key={id} className={styles.box}>
                  <RiCheckboxCircleLine />
                  <p>{priceTitle}</p>
                </div>

                  ))
                }
              </div>
              <div className="dashad"></div>
              <Btn title="Get startad" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
