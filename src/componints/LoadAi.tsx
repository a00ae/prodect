import React from "react";

function LoadAi() {
  return (
    <div className="perant_load">
      <svg className="svg" viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
      <div className="perant_load_message">
        {Array.from(new Array(3)).map((_,index) => (
            <span key={index} className="loading_ai_message"></span>
        ))}
      </div>
    </div>
  );
}

export default LoadAi;
