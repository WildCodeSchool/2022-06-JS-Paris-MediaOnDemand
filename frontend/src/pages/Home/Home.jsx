import React from "react";
import { Link } from "react-router-dom";
import { Button, TutoCardList } from "@components";
import { PlusIcon, ArrowIcon } from "@assets/iconsCard";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <TutoCardList />
      <PlusIcon />
      <ArrowIcon />
      <Link to="/go-sophia">
        <Button buttonSize="large" buttonStyle="dark">
          Go SOPHIA !
        </Button>
      </Link>
    </div>
  );
};

export default Home;
