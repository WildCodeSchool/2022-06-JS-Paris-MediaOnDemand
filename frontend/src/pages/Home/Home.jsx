import React from "react";
import { Button, TutoCardList } from "@components";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <TutoCardList />
      <Button buttonSize="large" buttonStyle="dark">
        Go SOPHIA !
      </Button>
    </div>
  );
};

export default Home;
