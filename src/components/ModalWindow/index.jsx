import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";

const ModalWindow = ({ children, className, visible, closeModal }) => {
  const classes = classNames("modal", visible ? "modal-active" : "", className);

  return (
    <div className={classes} onClick={(e) => closeModal(e)}>
      <div className="modal-content">{children}</div>
    </div>
  );
};

ModalWindow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

ModalWindow.defaultProps = {
  className: "",
};

export default ModalWindow;
