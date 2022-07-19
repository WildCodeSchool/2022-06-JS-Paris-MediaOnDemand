import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TutoCardList } from "@components";
import "./Home.scss";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <div className="home-container">
      <div className="home-container__legal">
        <Link to="legal">
          <button type="button">Légal</button>
        </Link>
      </div>
      <TutoCardList />
      <Link to="/go-sophia">
        <Button
          buttonSize={windowWidth < 768 ? "large" : "small"}
          buttonStyle="dark"
        >
          Go SOPHIA !
        </Button>
      </Link>
    </div>
  );
};

export default Home;
