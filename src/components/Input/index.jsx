import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";

const Input = ({ value, onChange, className, placeholder, type }) => {
  const classes = classNames("input", className);

  return (
    <input
      value={value}
      className={classes}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      autoFocus
    />
  );
};

Input.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  value: "",
  onChange: () => {},
  className: "",
  placeholder: "",
  type: "text",
};

export default Input;
