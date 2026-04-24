const btn = ["buy template", "More Templates", "Made in Framer"];

function Button() {
  return (
    <div className="button-app">
      {btn.map((el) => (
        <div className={`btn-shop ${el.split(' ').join("-")}`}>
          <a href="">
            <p>{el}</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Button;
