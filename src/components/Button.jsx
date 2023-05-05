import React from "react";

const Button = ({ handleButton, type, message }) => {
  return (
    <button
      className={`btn btn--${type}`}
      onClick={() => handleButton({ type, message })}
    >
      {type}
    </button>
  );
};

export default Button;
