import {type ReactNode, useEffect, useRef, useState } from "react";
import "./css/Shoppingcart.css";
import type { Shopping } from "./typescript/type";
import Box from "./Nodos/Box";
import { useProducts } from "./context/ProductProvider";

const readTitle: Shopping = {
  data: "02",
  title: "Featured work",
  projects: "50+ projects",
  heading: (
    <>
      <span>Shaping</span>
      <span>timeless </span>
      <span>visual</span>
      <span>identities.</span>
    </>
  ),
};
function Shoppingcart() {
  const { products } = useProducts();
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(window.innerWidth > 1440);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setWidth(currentWidth);

      // إغلاق القائمة تلقائياً في الشاشات الصغيرة
      if (currentWidth <= 1440) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }, // يبدأ التأثير عند ظهور 10% من العنصر
    );

    const cards = containerRef.current?.querySelectorAll(".image-card");
    cards?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="shopping-cart">
      <div className="container">
        <Box
          className="shopping-cart__box"
          title={readTitle}
          more="All projects"
        />
        <div className="shopping-cart__cards" ref={containerRef}>
          {products.map(({ image, name, text, description }, index) => (
            <div key={name} className="image-card">
              <a
                className="card-item visible-row"
                href=""
                style={{
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                }}>
                <div className="card">
                  <div className="title">
                    <h3>{name}.</h3>
                    {isOpen ? <p>{text}.</p> : <p>{description.Year}</p>}
                  </div>

                  <div className="description">
                    {Object.entries(description).map(([key, value]) => (
                      <div key={key as string}>
                        <div>
                          <p>{key}</p>
                        </div>

                        <div className="dadashed"></div>
                        <div>
                          <span>{value as ReactNode}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="image">
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

export default Shoppingcart;

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
