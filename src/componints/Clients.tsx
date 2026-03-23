import { memo, useRef } from "react";
import { useBoxData } from "./context/BoxProvider";
import Box from "./Nodos/Box";
import "./css/clients.scss";
import { useProducts } from "./context/ProductProvider";
import { useScrollVisibility } from "./Hooks/useViewHooks";
function Clients() {
  const { clients } = useBoxData();
  const { box } = useProducts();
  const refCurrant = useRef<HTMLDivElement>(null);
  useScrollVisibility(refCurrant, ".box-card");

  return (
    <div className="clients" id="clients">
      <div className="container" ref={refCurrant}>
        <Box title={clients.title} />

          <div className="box-card">
          {box.map(({ imges, title, price, desc }, index) => (
            <div key={index} className={`card-item ${!imges ? "active" : ""}`}>
              {!imges ? (
                <div className="text">
                  <div className="text-price">
                    <div className="title-cards">
                      <span>{price}</span>
                      <p>{index == 4 ? "+" : "%"}</p>
                    </div>

                    <p>{title}</p>
                  </div>
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="imges">
                  <img src={imges} alt={title || "imges.com"} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Clients);
