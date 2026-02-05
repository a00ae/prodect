import { useEffect, useState } from "react";
import "./App.css";
import type { Prodact } from "./type/type";
import ListData from "./componints/ListData";
import Shoppingcart from "./componints/Shoppingcart";

const prodct: Prodact[] = [
  {
    id: "Honda",
    urlImage:
      "https://di-uploads-pod14.dealerinspire.com/hondaeastcincy/uploads/2023/02/23Accord-Lineup.jpg",
    rute: 3,
    discount: 10000,
    price: 100000,
  },
  {
    id: "Mercedes",
    urlImage:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/GLS/9791/1763535546980/front-left-side-47.jpg?impolicy=resize&imwidth=480",
    rute: 5,
    discount: 15000,
    price: 1150000,
  },
  {
    id: "odi",
    urlImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDUUVmjSJeagEhvOTDhhhqbSv2Hzp0uN47w&s",
    rute: 4,
    discount: 30000,
    price: 105000,
  },
];

function App() {
  const [loding, setLoding] = useState<boolean>(false);
  const [data, setData] = useState<Prodact[]>([]);

  useEffect(() => {
    const getData = async () => {
      setLoding(true);
      await new Promise((resolve) =>
        setTimeout(resolve, Math.random() * 6000 + 500),
      );
      setData(prodct);
      setLoding(false);
    };
    getData();
  }, []);

  console.log(data);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        flexDirection: "column",
      }}>
      <Shoppingcart />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}>
        {loding && <span>Loding...</span>}
        {!loding && data && <ListData data={data} />}
      </div>
    </div>
  );
}

export default App;
