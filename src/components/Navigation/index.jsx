import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-item">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-page" : "menu-item")}
        >
          Home
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "active-page" : "menu-item")}
        >
          About
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink
          to="content"
          className={({ isActive }) => (isActive ? "active-page" : "menu-item")}
        >
          Content
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
