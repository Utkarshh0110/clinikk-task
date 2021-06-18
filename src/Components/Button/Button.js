import React from "react";
import "./Button.css";
const Button = ({ name, bgcolor }) => {
  var btn;
  if (bgcolor === "none") {
    btn = "btnNone";
  } else {
    btn = "btn";
  }
  return (
    <button
      style={{
        backgroundColor: { bgcolor },
      }}
      className={btn}
    >
      {name}
    </button>
  );
};

export default Button;
