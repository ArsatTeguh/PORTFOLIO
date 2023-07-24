import React from "react";
import "./button.css";
import { useStore } from "../../feature";
const ButtonOuline = ({ children, ...props }) => {
  const [state] = useStore();
  return (
    <button
      type="button"
      className="btn-outline"
      style={{ color: state.thema ? "white" : "black" }}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonOuline;
