import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ text, type, onClick }) => (
  <div className={`calc-button ${type}`} onClick={() => { onClick(text) }}>
    {text}
  </div>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "equal"]),
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: "primary",
};

export default Button;
