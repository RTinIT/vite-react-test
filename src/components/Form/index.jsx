import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { handleLoginError } from "../../utils/handleLoginError";
import "normalize.css";
import "./style.css";

const Form = ({
  btnSwitch,
  title,
  question,
  className,
  btnText,
  switchToPage,
  handleSubmit,
  errorCode,
}) => {
  const classes = classNames("form", className);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

  const makePswVisible = (e) => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <form className={classes}>
      <h2 className="form-title">{title}</h2>
      <Input
        className="form-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
      />
      <div className="psw-wrapper">
        <Input
          className={"input-password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password (at least 6 characters)"
          type={type}
        />
        <label
          htmlFor={title.toLowerCase() + "-checkbox"}
          className="vision-icon"
        >
          <input
            type="checkbox"
            id={title.toLowerCase() + "-checkbox"}
            style={{ display: "none" }}
            onChange={(e) => makePswVisible(e)}
          />
          {type === "password" ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </label>
      </div>

      <Button
        onClick={(event) => {
          event.preventDefault();
          handleSubmit(email, password);
        }}
        className="form-btn"
      >
        {btnText}
      </Button>
      <div className="link-wrapper">
        <p>{question}</p>
        <NavLink className="link" to={switchToPage}>
          {btnSwitch}
        </NavLink>
      </div>
      <div className="error-message">
        {errorCode ? (
          <p style={{ color: "red" }}>{handleLoginError(errorCode)}</p>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default Form;
