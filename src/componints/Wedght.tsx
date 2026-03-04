import {
  RiAccountCircleLine,
  RiArrowDropRightLine,
  RiChatAiLine,
  RiShoppingCart2Fill,
  RiStore3Line,
} from "@remixicon/react";
import { Product } from "../opp/opp";
import "./css/wedght.css"
import "../../public/Avater.svg"


const arr: Product[] = [
    {
    name: "Studio",
    icon: <RiArrowDropRightLine />,
  },
  {
    name: "Projects",
    icon: <RiChatAiLine />,
  },
  {
    name: "Blog",
    icon: <RiStore3Line />,
  },
  {
    name: "Contact",
    icon: <RiShoppingCart2Fill />,
  },
];
function Wedght() {


  return (
    <div className="wedght">
      <div className="container">
        <div className="image">
        <img src="../../public/Avater.svg" alt="" />
        </div>
        <div className="nav">
          <ul className="nav-element">
            {arr.map(({name, icon}) => (

                <li><a className="top-text">{name}</a><a className="bottom-text">{name}</a> </li>

            ))}
            {/* <li>Studio</li>
            <li>Projects</li>
            <li>Blog</li>
            <li>Contact</li> */}
          </ul>
          <div className="menu-nav">
            <div className="nav-1 first"></div>
            <div className="nav-1 last"></div>
          </div>
        </div>
      </div>    
    </div>
  );
}

export default Wedght;
