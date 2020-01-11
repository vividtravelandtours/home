import React from "react";
import { Segment } from "semantic-ui-react";
import "./Home.css";
import HomeHeader from "./HomeHeader";

const Home = () => {
  return (
    <Segment.Group>
        <HomeHeader />
    </Segment.Group>
  );
};

export default Home;