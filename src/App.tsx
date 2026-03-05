// import { useReducer } from "react";
import "./App.css";
import Studio from "./componints/Studio";
import Wedght from "./componints/Wedght";
import { Product } from "./opp/opp";



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
    <div className="app">
      <Wedght />
      <Studio/>
    </div>
  );
}

export default App;
