import { useRef, memo } from "react";
import styles from "./css/Shoppingcart.module.scss";
import Box from "./Nodos/Box";
import { useProducts } from "./context/ProductProvider";
import { useBoxData } from "./context/BoxProvider";
import { useResponsiveToggle, useScrollVisibility } from "./Hooks/useViewHooks";

function Shoppingcart() {
  console.log("Shoppingcart");
  const { products } = useProducts();
  const { shoppingCart } = useBoxData();
  const containerRef = useRef<HTMLDivElement>(null);

  // استخدام الهوكات المخصصة
  const isOpen = useResponsiveToggle(1440);
  useScrollVisibility(containerRef, `.${styles["image-card"]}`);

  return (
    <div className={styles["shopping-cart"]}>
      <div className={styles.container}>
        <Box
          className={styles["shopping-cart__box"]}
          title={shoppingCart.title}
          more={shoppingCart.more}
          isAnimated={true}
        />
        <div className={styles["shopping-cart__cards"]} ref={containerRef}>
          {products.map(({ image, name, text, description }, index) => (
            <div key={name} className={styles["image-card"]}>
              <a
                className={`${styles["card-item"] || ""} ${styles["visible-row"] || ""}`}
                href=""
                style={{
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                }}>
                <div className={styles.card}>
                  <div className={styles.title}>
                    <h3>{name}.</h3>
                    {isOpen ? <p>{text}.</p> : <p>{description.Year}</p>}
                  </div>

                  <div className={styles.description}>
                    {Object.entries(description).map(([key, value]) => (
                      <div key={key}>
                        <div>
                          <p>{key}</p>
                        </div>

                        <div className={styles.dadashed}></div>
                        <div>
                          <span>{value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.image}>
                  <img src={image} alt={name} />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Shoppingcart);

// import { RiShoppingBagFill } from "@remixicon/react";
// import { useShoppingcart } from "./context/useShoppingcart";
// import "./css/Shoppingcart.css";

// function Shoppingcart() {
//   const { count } = useShoppingcart();
//   return (
//     <div className="Shoppingcart_box">
//       <div className="Shoppingcart_relative_container">
//         <button className="Shoppingcart_button">
//           <RiShoppingBagFill color="#1565c0" />
//         </button>

//         {count.length > 0 && (
//           <div className="Shoppingcart_count">{count.length}</div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Shoppingcart;
