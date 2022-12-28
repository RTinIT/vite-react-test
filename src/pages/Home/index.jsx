import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-text-section">
        <h3>Welcome to </h3>
        <h2>The Post Viewer's home page</h2>
        <Button className={"home-btn"}>
          <NavLink to="/vite-react-test/content">See more</NavLink>
        </Button>
      </div>
      <div>
        <Loader
          config={{
            loader: { width: "25em", height: "25em" },
            circle: {
              width: "20em",
              height: "20em",
              color1: "hsl(285, 79%, 60%)",
              color2: "hsl(285, 73%, 84%)",
              color3: "hsl(285, 87%, 35%)",
            },
          }}
        >
          Just Animation
        </Loader>
      </div>
    </div>
  );
};

export default Home;
