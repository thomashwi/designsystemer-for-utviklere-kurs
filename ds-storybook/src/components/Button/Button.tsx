import React from "react";
import "./styles.scss";

interface Props {
  size?: "small" | "medium" | "large" | "ridiculous";
  onClick: () => void;
}

const Button: React.FC<Props> = ({ children, size = "small", onClick }) => {
  return (
    <button onClick={onClick} className={`brand-button--${size}`}>
        {children}
      </button>
  )
};

export default Button;