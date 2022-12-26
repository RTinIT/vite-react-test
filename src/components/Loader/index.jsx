import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";

const Loader = ({ children, config, className }) => {
  const { loader, circle } = config;

  const classes = classNames("loader-wrapper", className);

  return (
    <div className={classes}>
      <div
        className="loader"
        style={{ width: loader.width, height: loader.height }}
      >
        <span
          className="circle"
          style={{
            width: circle.width,
            height: circle.height,
            borderColor: circle.color1,
          }}
        ></span>
        <span
          className="circle"
          style={{
            width: circle.width,
            height: circle.height,
            borderColor: circle.color2,
          }}
        ></span>
        <span
          className="circle"
          style={{
            width: circle.width,
            height: circle.height,
            borderColor: circle.color3,
          }}
        ></span>
        <span className="loader-text"> {children} </span>
      </div>
    </div>
  );
};

Loader.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  config: PropTypes.object,
};

Loader.defaultProps = {
  children: "Loading...",
  className: "",
  config: {
    loader: { width: "12em", height: "12em", textColor: "#202020" },
    circle: {
      width: "10em",
      height: "10em",
      color1: "",
      color2: "",
      color3: "",
    },
  },
};

export default Loader;
