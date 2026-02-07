import "./App.css";
import ListData from "./componints/ListData";
import Shoppingcart from "./componints/Shoppingcart";
import { useShoppingcart } from "./componints/context/useShoppingcart";
 import Alert from '@mui/material/Alert';



function App() {
  const {loading, data} = useShoppingcart()

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

       
      </div>
    
  );
}

export default App;
