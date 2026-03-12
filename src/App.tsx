// import { useReducer } from "react";
import "./App.css";
import AboutUs from "./componints/AboutUs";
import Shoppingcart from "./componints/Shoppingcart";
import Studio from "./componints/Studio";
import Wedght from "./componints/Wedght";
import { BoxProvider } from "./componints/context/BoxProvider";
import { ProductProvider } from "./componints/context/ProductProvider";

// const x = 0;

// const reducer = (state: number, action: { type: string; payload: number }) => {
//   switch (action.type) {
//     case "inc":
//       return state + action.payload;
//     case "dic":
//       return state - action.payload;
//     case "reset":
//       return x;
//     default:
//       return state;
//   }
// };

function App() {
  return (
    <ProductProvider>
      <div className="app">
        <Wedght />
          <Studio />
        <BoxProvider>
        <AboutUs/>
          <Shoppingcart />
        </BoxProvider>
      </div>
    </ProductProvider>
  );
}

export default App;
