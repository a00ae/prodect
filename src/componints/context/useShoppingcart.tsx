/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import type { Prodact, ShoppingCartContextType, Props } from "../../type/type";

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

// 1 stap
const Shoppingcart = createContext<ShoppingCartContextType | null>(null);

// 2stap localStorage
const initialCartItems = localStorage.getItem("count")
  ? JSON.parse(localStorage.getItem("count")!)
  : [];

// 3staps Provider
// export =>
const ShoppingCartProvider = ({ children }: Props) => {
  const [count, setCount] = useState<Prodact[]>(initialCartItems);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Prodact[]>([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     await new Promise((resolve) =>
  //       setTimeout(resolve, Math.random() * 10000 + 500),
  //     );
  //     setData(prodct);
  //     setLoading(false);
  //   };
  //   getData();
  // }, []);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <Shoppingcart.Provider value={{ count, setCount, loading, data }}>
      {children}
    </Shoppingcart.Provider>
  );
};
export default ShoppingCartProvider;

// 4 costom Hook
// export =>
export const useShoppingcart = () => {
  const context = useContext(Shoppingcart);
  if (!context) {
    throw new Error("useShoppingcart must be used within a Shopping provider");
  }
  return context;
};
