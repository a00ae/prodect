

function Button() {
  return (
    <div className="button-app">
      {["buy template", "More Templates", "Made in Framer"].map((el) => (
        <div className={`btn-shop ${el.split(' ').join("-").toLocaleLowerCase()}`}>
          <a href="">
            <p>{el}</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Button;
