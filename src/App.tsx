import { useReducer } from "react";
import "./App.css";
import ListData from "./componints/ListData";
import Shoppingcart from "./componints/Shoppingcart";
import { useShoppingcart } from "./componints/context/useShoppingcart";
import LoadAi from "./componints/LoadAi";

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
  const { loading, data } = useShoppingcart();

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        flexDirection: "column",
        position: "relative",
      }}>
      <Shoppingcart />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}>
        {loading && <LoadAi/>}
        {!loading && data && <ListData data={data} />}
      </div>
    </div>
  );
}

export default App;
