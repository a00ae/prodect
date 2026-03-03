// import type { ListDataProps, Prodact } from "../type/type";
// import { RiStarFill } from "@remixicon/react";
// import { useShoppingcart } from "./context/useShoppingcart";
// import Alert from "@mui/material/Alert";
// import { useState } from "react";
// // import { useState } from 'react';
// import "./css/ListData.css";

// function ListData({ data }: ListDataProps) {
//   const { setCount } = useShoppingcart();
//   const [alert, setAlert] = useState(false);
//   const handleAddCard = (item: Prodact) => {
//     setAlert(true);
//     const timer = setTimeout(() => setAlert(false), 2000);
//     setCount((prev) => [...prev, item]);
//     return () => {
//       clearTimeout(timer);
//     };
//   };
//   return (
//     <div className="ListData_container">
//       <ul className="ListData_list">
//         {data.map(({ id, urlImage, discount, price, rute }) => (
//           <li className="ListData_item_container" key={id}>
//             <img src={urlImage} alt={id} className="ListData_image" />
//             <h2>{id}</h2>
//             <div>
//               {Array.from(new Array(rute)).map((_, index) => (
//                 <RiStarFill key={index} color="#ffe017" />
//               ))}
//             </div>
//             <span>
//               discount: <strong>{discount} $</strong>
//             </span>
//             <p className="ListData_price_original">
//               price:
//               <strong>{price} $</strong>{" "}
//             </p>
//             <button
//               onClick={() =>
//                 handleAddCard({ id, urlImage, discount, price, rute })
//               }
//               className="ListData_add_button"
//               type="button">
//               Add Card
//             </button>
//           </li>
//         ))}
//       </ul>

//       <Alert
//         className={`ListData_alert ${alert ? "ListData_alert_visible" : ""}`}>
//         This is a success Alert.
//       </Alert>
//     </div>
//   );
// }

// export default ListData;
