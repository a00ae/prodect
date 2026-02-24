
function LoadAi() {
  return (
    <div className="perant-LI">
      {Array.from(new Array(3)).map(() => (
        <div className="perant_load">
          <div className="imag_load"></div>
          <div className="perant_load_message">
            {Array.from(new Array(3)).map((_, index) => (
              <span key={index} className="loading_ai_message"></span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default LoadAi;
