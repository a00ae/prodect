import "./css/Shoppingcart.css";
import type { Shopping } from "./typescript/type";
import Box from "./Nodos/Box";
const readTitle: Shopping = {
  data: "02",
  title: "Featured work",
  projects: "50+ projects",
};
function Shoppingcart() {
  return (
    <div className="shopping-cart">
      <div className="container">
        <Box
          className="shopping-cart__box"
          title={readTitle}
          heading="Shaping timeless visual identities."
          more="All projects"
        />
        <div className="image-card">
          <a href="">
            <div className="card">
              <div className="title">
                <h3>Nova Skincare.</h3>
                <p>
                  Crafted a refined digital identity and eCommerce experience
                  for a luxury skincare brand, resulting in a 180% increase in
                  online conversions.
                </p>
              </div>
              <div className="description">
                <p>Year</p>
                <div className="dadashed"></div>
                <span>2025</span>
              </div>
            </div>
            <div className="image"></div>
          </a>
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
