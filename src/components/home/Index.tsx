import React, { useContext, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import HomeHeader from "./header/HomeHeader";
import MainStore from "../../app/stores/MainStore";
import { observer } from "mobx-react-lite";
import { Loading } from "../../app/layout/Loading";
import HomeContentBody from "./content/body";
import PopularTours from "./popularTours/List";
import TestimonialSection from "./testimaonial/section";

const Home = () => {

  const { loadData, isLoading } = useContext(MainStore);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return isLoading ? <Loading msg="Loading..." /> : (
    <Segment.Group>
        <HomeHeader />
        <HomeContentBody />
        <PopularTours />
        <TestimonialSection />
    </Segment.Group>
  );
};

export default observer(Home);