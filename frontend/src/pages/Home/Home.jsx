import React from "react";
import { Link } from "react-router-dom";
import { Button, TutoCardList } from "@components";
import "./Home.scss";

const Home = () => {
  const size = window.innerWidth;

  return (
    <div className="home-container">
      <TutoCardList />
      <Link to="/go-sophia">
        <Button buttonSize={size < 700 ? "large" : "small"} buttonStyle="dark">
          Go SOPHIA !
        </Button>
      </Link>
    </div>
  );
};

export default Home;
