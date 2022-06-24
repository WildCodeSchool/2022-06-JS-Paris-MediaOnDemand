import React from "react";
import { Link } from "react-router-dom";
import { Button, TutoCardList } from "@components";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <TutoCardList />
      <Link to="/go-sophia">
        <Button buttonSize="large" buttonStyle="dark">
          Go SOPHIA !
        </Button>
      </Link>
    </div>
  );
};

export default Home;
