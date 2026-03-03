import {
  RiAccountCircleLine,
  RiArrowDropRightLine,
  RiChatAiLine,
  RiShoppingCart2Fill,
  RiStore3Line,
} from "@remixicon/react";
import { Product } from "../opp/opp";
import "./css/wedght.css"


const arr: Product[] = [
    {
    name: "arow",
    icon: <RiArrowDropRightLine />,
  },
  {
    name: "chat",
    icon: <RiChatAiLine />,
  },
  {
    name: "Store",
    icon: <RiStore3Line />,
  },
  {
    name: "ShoppingCart",
    icon: <RiShoppingCart2Fill />,
  },
  {
    name: "Account",
    icon: <RiAccountCircleLine />,
  },
];
function Wedght() {


  return (
    <div className="wedght">
      <ul className="container">
        {arr.map(({name, icon}) => (
          <li key={name}>{icon}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default Wedght;
