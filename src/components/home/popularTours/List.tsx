import React, { useContext } from "react";
import { Segment, Container, Grid, Header, Icon } from "semantic-ui-react";
import MainStore from "../../../app/stores/MainStore";
import Tour from "./Item";
import { observer } from "mobx-react-lite";
import { useMediaQuery } from "react-responsive";

const PopularTours = () => {
  const { PopularTours } = useContext(MainStore);
  const isMobile = useMediaQuery({ query: '(max-device-width: 900px)'});
  const gridCol = isMobile ? 16 : 4;

  return (
    <Segment style={{paddingBottom: '4em', backgroundColor: '#eeeeee'}}>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <Header style={{margin: '2em 0 1em 0'}} as="h2">
                <Icon color='blue' name="globe" />
                <Header.Content>Popular Tours</Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {PopularTours?.map(tour => (
              <Grid.Column key={tour.id} width={gridCol}>
                <Tour tour={tour} />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default observer(PopularTours);
