import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

const SignInBtn = () => {
  const navigate = useNavigate();

  const logOut = async () => {
    console.log("Log out ...");
    await signOut(auth);
    localStorage.removeItem("isAuth");
    navigate("/vite-react-test/sign-in");
  };

  return (
    <div className="signin-btn-wrapper">
      {localStorage.getItem("isAuth") ? (
        <button onClick={logOut} className={"signin-btn"}>
          <FontAwesomeIcon icon={faArrowUpFromBracket} size="1x" />
          <span>Log out</span>
        </button>
      ) : (
        <NavLink
          to={"/vite-react-test/sign-in"}
          className={({ isActive }) =>
            isActive ? "signin-btn signin-btn-active" : "signin-btn"
          }
        >
          <FontAwesomeIcon icon={faUser} size="1x" />
          <span>Sign in</span>
        </NavLink>
      )}
    </div>
  );
};

export default SignInBtn;
