import { useReducer } from "react";
import "./App.css";
import ListData from "./componints/ListData";
import Shoppingcart from "./componints/Shoppingcart";
import { useShoppingcart } from "./componints/context/useShoppingcart";

const x = 0;

const reducer = (state: number, action: {type: string, payload: number}) => {
  switch (action.type) {
    case "inc":
      return state + action.payload;
    case "dic":
      return state - action.payload;
    case "reset":
      return x;
    default:
      return state;
  }
};

function App() {
  const { loading, data } = useShoppingcart();
  const [count, dispatch] = useReducer(reducer, x);

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
        {loading && <span>Loding...</span>}
        {!loading && data && <ListData data={data} />}
      </div>

      <h2>{count}</h2>

      <button
        style={{
          color: "white",
        }}
        onClick={() => dispatch({type: "inc", payload: 1})}
        type="button">
        inc
      </button>
      <button
        style={{
          color: "white",
        }}
        onClick={() => dispatch({type: "dic", payload: 1})}
        type="button">
        dic
      </button>
      <button
        style={{
          color: "white",
        }}
        onClick={() => dispatch({type: "reset", payload: x})}
        type="button">
        reset
      </button>
    </div>
  );
}

export default App;
