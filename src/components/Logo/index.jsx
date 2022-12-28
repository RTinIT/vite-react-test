import React from "react";
import { NavLink } from "react-router-dom";
import viteLogo from "../../assets/vite.svg";
import "./style.css";

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <NavLink to="/" className="logo">
        <img src={viteLogo} />
        <div className="logo-text-wrapper">
          <h1 className="logo-text">Post Viewer</h1>
        </div>
      </NavLink>
    </div>
  );
};

export default Logo;
