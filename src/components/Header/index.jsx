import React from "react";
import Navigation from "../Navigation";
import Logo from "../Logo";
import "./style.css";
import SignInBtn from "../SignInBtn";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <SignInBtn />
    </header>
  );
};

export default Header;
