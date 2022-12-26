import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";

const Button = ({ children, onClick, className, disabled, active }) => {
  const classes = classNames("btn", className, { active });

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

Button.defaultProps = {
  children: "Button",
  onClick: () => {},
  className: "",
  disabled: false,
  active: false,
};

export default Button;
