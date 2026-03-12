import "./css/wedght.scss";
import "../../public/Avater.svg";
import {memo} from "react"

const arr = ["Studio", "Projects", "Blog", "Contact"];
function Wedght() {
  console.log("Wedght");
  return (
    <div className="wedght">
      <div className="container">
        <div className="image">
          <img src="../../public/Avater.svg" alt="" />
        </div>
        <div className="nav">
          <ul className="nav-element">
            {arr.map((name) => (
              <li key={name}>
                <a className="top-text">{name}</a>
                <a className="bottom-text">{name}</a>
              </li>
            ))}
          </ul>
          <div className="menu-nav">
            <div className="first"></div>
            <div className="last"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Wedght);
