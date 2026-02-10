import { useReducer } from "react";
import "./App.css";
import ListData from "./componints/ListData";
import Shoppingcart from "./componints/Shoppingcart";
import { useShoppingcart } from "./componints/context/useShoppingcart";

const reducer = (state, action) => {
  switch(state){
    case "inc":
      return action + 1
  }
}

function App() {
  const {loading, data} = useShoppingcart();
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    
      <div
        style={{
          width: "100%",
          height: "100vh",
          flexDirection: "column",
          position: "relative"
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


          <button type="button">click{count}</button>
       
      </div>
    
  );
}

export default App;
