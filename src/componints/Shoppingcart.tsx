import "./css/Shoppingcart.css";
import type { Shopping } from "./typescript/type";
import Box from "./Nodos/Box";
import "../../public/image-shopping/shopping-01.avif";
import "../../public/image-shopping/shopping-02.avif";
import "../../public/image-shopping/shopping-03.avif";
import "../../public/image-shopping/shopping-04.avif";
import type { Product } from "../opp/opp";
const cardItem: Product[] = [
  {
    name: "Nova Skincare",
    text: `Crafted a refined digital identity and eCommerce experience
                  for a luxury skincare brand, resulting in a 180% increase in
                  online conversions.`,
    description: {
        Year: ["Year", "2025"],
        Client: ["Client", "Nova Skincare"],
        Type: ["Type", "Brand Identity"],
        Timeline: ["Timeline", "3 Months"],
    },
    image: "../../public/image-shopping/shopping-01.avif",
  },
  {
    name: "Volt Mobility",
    text: `Developed a high-performance website and multi-channel launch campaign for an electric mobility startup, driving a 3x growth in leads.`,
    description: {
        Year: ["Year", "2024"],
        Client: ["Client", "Volt Mobility"],
        Type: ["Type", "Marketing Campaign"],
        Timeline: ["Timeline", "4 Months"],
    },
    image: "../../public/image-shopping/shopping-02.avif",
  },
  {
    name: "Maison",
    text: `Produced a high-end brand campaign with visuals, storytelling, and paid media strategy that expanded audience reach by 200%.`,
    description: {
        Year: ["Year", "2022"],
        Client: ["Client", "Maison & Co"],
        Type: ["Type", "Content Production"],
        Timeline: ["Timeline", "4 Months"],
    },
    image: "../../public/image-shopping/shopping-02.avif",
  },
  {
    name: "Axis Tech",
    text: `Redesigned the digital experience for a SaaS platform, improving usability and increasing user retention by 45%.`,
    description: {
        Year: ["Year", "2023"],
        Client: ["Client", "Axis Tech"],
        Type: ["Type", "UX/UI Design"],
        Timeline: ["Timeline", "2.5 Months"],
    },
    image: "../../public/image-shopping/shopping-02.avif",
  },
];

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
  return (
    <div className="shopping-cart">
      <div className="container">
        <Box
          className="shopping-cart__box"
          title={readTitle}
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
            <div className="image">
              <img src="../../public/image-shopping/shopping-01.avif" alt="" />
            </div>
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
