import React from "react";
import "./style.css";

function Button(props) {
  const { title, type, className } = props;
  return (
    <button className={type === `continue` ? "buttonContinue" : "buttonExit"}>
      {title}
    </button>
  );
}

Button.defaultProps = {
  className: "",
};

export default Button;
