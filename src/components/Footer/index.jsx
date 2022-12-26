import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./style.css";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <a href="https://github.com/RTinIT">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <div>
        <FontAwesomeIcon icon={faCopyright} />
        <span style={{ marginLeft: "5px" }}>2022</span>
      </div>
    </footer>
  );
};

export default Footer;
