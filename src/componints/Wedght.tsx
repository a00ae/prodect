import "./scss/wedght.scss";
import { memo, useState } from "react"; // استيراد useState

function Wedght() {
  console.log("Wedght");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // حالة للتحكم في فتح/إغلاق القائمة

  const handleClickDropdown = ():void => {
    setIsMenuOpen(!isMenuOpen); // تبديل حالة القائمة
  };
  return (
    <div className={`wedght ${isMenuOpen ? "is-open" : ""}`} id="wedght">
      {" "}
      {/* تطبيق الفئة بناءً على الحالة */}
      <div className="container">
        <div className="image">
          <img src={`${import.meta.env.BASE_URL}Avater.svg`} alt="Avatar" />
        </div>
        <div className="nav">
          <ul className="nav-element">
            {["Studio", "Projects", "Blog", "Contact"].map((ele, index) => (
              <li key={index}>
                <a ><p className="top-text" data-wedght={ele}>{ele}</p></a>
              </li>
            ))}
          </ul>
          <div onClick={handleClickDropdown} className="menu-nav">
            <div className="first"></div>
            <div className="last"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Wedght);
