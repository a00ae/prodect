import { RiShoppingBagFill } from "@remixicon/react";
import { useShoppingcart } from "./context/useShoppingcart";
import "./css/Shoppingcart.css";

function Shoppingcart() {
  const { count } = useShoppingcart();
  return (
    <div className="Shoppingcart_box">
      <div className="Shoppingcart_relative_container">
        <button className="Shoppingcart_button">
          <RiShoppingBagFill color="#1565c0" />
        </button>

        {count.length > 0 && (
          <div className="Shoppingcart_count">{count.length}</div>
        )}
      </div>
    </div>
  );
}

export default Shoppingcart;
