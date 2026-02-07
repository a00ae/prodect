import type { ListDataProps, Prodact } from "../type/type";
import { RiStarFill } from "@remixicon/react";
import { useShoppingcart } from "./context/useShoppingcart";
import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";
// import { useState } from 'react';

function ListData({ data }: ListDataProps) {
  const { setCount } = useShoppingcart();
  const [alert, setAlert] = useState(false);
  const handleAddCard = (item: Prodact) => {
    setAlert(true);
    const timer = setTimeout(() => setAlert(false), 2000);   
    setCount((prev) => [...prev, item]);
    return () => {
      clearTimeout(timer);
    };
  };
  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        gap: 10,
        boxSizing: "border-box",
        fontSize: "20px",
      }}>
      {data.map(({ id, urlImage, discount, price, rute }) => (
        <div
          style={{
            boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                              0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                              0 12.5px 10px rgba(0, 0, 0, 0.06),
                              0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                              0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                              0 100px 80px rgba(0, 0, 0, 0.12)
                                                                `,
            borderRadius: "5px",
          }}
          key={id}>
          <li>
            <img
              src={urlImage}
              alt={id}
              style={{ width: "300px", height: "200px", borderRadius: "5px" }}
            />
          </li>
          <li>
            <h2>{id}</h2>
          </li>
          <li>
            {Array.from(new Array(rute)).map((_, index) => (
              <RiStarFill key={index} color="#ffe017" />
            ))}
          </li>
          <li>
            <span>
              discount: <strong>{discount} $</strong>
            </span>
          </li>
          <li>
            <p style={{ textDecoration: "line-through" }}>
              price:
              <strong>{price} $</strong>{" "}
            </p>
          </li>
          <button
            onClick={() =>
              handleAddCard({ id, urlImage, discount, price, rute })
            }
            style={{ width: "100%", backgroundColor: "#1565c0" }}
            type="button">
            Add Card
          </button>
        </div>
      ))}

      <Alert
        sx={{
          position: "absolute",
          top: "calc(70% + 10px)",
          left: 20,
          opacity: alert ? 1 : 0,
          visibility: alert ? "visible" : "hidden",
          transition: ".3s ease-in-out",
          transform: alert ? "calc(70% - 10px)" : "",
        }}
        severity="success">
        This is a success Alert.
      </Alert>
    </ul>
  );
}

export default ListData;
