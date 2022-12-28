import React from "react";
import reactLogo from "../../assets/react.svg";
import firebaseLogo from "../../assets/firebase-icon.svg";
import viteLogo from "../../assets/vite.svg";
import "./style.css";

const About = () => {
  return (
    <div className="about">
      <h3 className="about-title">This test application was created with</h3>
      <div className="technologies">
        <div className="technology-item">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="technology-logo" alt="Vite logo" />
          </a>
        </div>
        <div className="technology-item">
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="technology-logo" alt="React logo" />
          </a>
        </div>
        <div className="technology-item">
          <a href="https://firebase.google.com/" target="_blank">
            <img
              src={firebaseLogo}
              className="technology-logo"
              alt="Firebase logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
