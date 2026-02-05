
import type { Prodact } from '../type/type'
import {  RiStarFill } from "@remixicon/react";
import Btn from "./Btn";
import { useState } from 'react';

interface ListDataProps{
    data: Prodact[];
}

function ListData({data}: ListDataProps) {
    const[sala, setSala] = useState<boolean>(false)
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
            <Btn onAddProdect={() => setSala(true)}/>
          </div>
        ))}
        
      </ul>
  )
}

export default ListData
