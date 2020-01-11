import React, { useContext, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "./Home.css";
import HomeHeader from "./HomeHeader";
import MainStore from "../../app/stores/MainStore";
import { observer } from "mobx-react-lite";

const Home = () => {

  const { loadData, isLoading } = useContext(MainStore);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return isLoading ? <h1>Loading ...</h1> : (
    <Segment.Group>
        <HomeHeader />
    </Segment.Group>
  );
};

export default observer(Home);