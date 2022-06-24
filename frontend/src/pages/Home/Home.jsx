import React from "react";
import TutoCardList from "../../components/Tuto/TutoCardList";
import Button from "../../components/button/Button";
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
