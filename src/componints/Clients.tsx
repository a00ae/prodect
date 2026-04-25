import { memo, useRef } from "react";
import Box from "./Nodos/Box";
import styles from "./css/Clients.module.scss";
import { useProducts } from "./context/ProductProvider";
import { useScrollVisibility } from "./Hooks/useViewHooks";
import { boxData } from "./context/data/data";
function Clients() {
  const {clients} = boxData;
  const { box } = useProducts();
  const refCurrant = useRef<HTMLDivElement>(null);
  useScrollVisibility(refCurrant, `.${styles["box-card"]}`);

  return (
    <div className={styles["clients"]} id="clients">
      <div className={styles.container} ref={refCurrant}>
        <Box title={clients.title} />

          <div className={styles["box-card"]}>
          {box.map(({ imges, title, price, desc }, index) => (
            <div key={index} className={`${styles["card-item"]} ${!imges ? styles.active : ""}`}>
              {!imges ? (
                <div className={styles.text}>
                  <div className={styles["text-price"]}>
                    <div className={styles["title-cards"]}>
                      <span>{price}</span>
                      <p>{index == 4 ? "+" : "%"}</p>
                    </div>

                    <p>{title}</p>
                  </div>
                  <p>{desc}</p>
                </div>
              ) : (
                <div className={styles.imges}>
                  <img src={imges} alt={title || "imges.com"} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Clients);
