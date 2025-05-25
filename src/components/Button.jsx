import React from "react";

const Button = ({ text, onClick, type = "button", className = "" }) => {
  return (
    <button>
      <span
        className={`inline-block px-6 py-2 text-white bg-primary rounded-lg cursor-pointer ${className}`}
        onClick={onClick}
        type={type}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
