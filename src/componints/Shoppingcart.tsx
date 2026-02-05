import { RiShoppingBagFill } from "@remixicon/react";
import { useState } from "react";
import type { Prodact } from "../type/type";
interface ListDataProps {
  count: Prodact[];
}

function Shoppingcart({ count }: ListDataProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        boxShadow: "",
        borderBottom: "1px solid #1565c023",
        
      }}>
      <div style={{position: "relative",}}>
        <button
          style={{
            position: "absolute",
            right: 300,
            backgroundColor: "#1565c023",
          }}>
          <RiShoppingBagFill color="#1565c0" />
        </button>

        {count.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "-1px",
              right: 300,
              backgroundColor: "#ff4d4f", // اللون الأحمر للتنبيه
              color: "white",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "10px",
              fontWeight: "bold",
              minWidth: "8px",
              textAlign: "center",
              // border: "2px solid #1a222d", // ليعطي فصلاً بين الأيقونة والرقم
            }}>
            {count.length}
          </div>
        )}
      </div>
    </div>
  );
}

export default Shoppingcart;
