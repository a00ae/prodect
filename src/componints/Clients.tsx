import { memo, useRef } from "react";
import Box from "./Nodos/Box";
import styles from "./scss/Clients.module.scss";
import { useProducts } from "./context/ProductProvider";
import { useScrollVisibility } from "./Hooks/useViewHooks";
import { boxData } from "./context/data/data";
function Clients() {
  const {clients} = boxData;
  const { box } = useProducts();
  const refCurrent = useRef<HTMLDivElement>(null!);
  useScrollVisibility(refCurrent, `.${styles["box-card"]}`);

  return (
    <div className={styles["clients"]} id="clients">
      <div className={styles.container} ref={refCurrent}>
        <Box title={clients.title} />

          <div className={styles["box-card"]}>
          {box.map(({ title, price, desc, image }, index) => (
            <div key={index} className={`${styles["card-item"]} ${!image ? styles.active : styles.img}`}>
              {!image ? (
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
                <div className={styles.images}>
                  <img src={image} alt={title || "client logo"} />
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
