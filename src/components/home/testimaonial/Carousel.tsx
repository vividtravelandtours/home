import React, { useContext } from "react";
import {
  Segment,
  Divider,
  Grid,
  Button,
  Header,
  Icon,
  Item
} from "semantic-ui-react";
import MediaQuery from "react-responsive";
import Carousel from "nuka-carousel";
import MainStore from "../../../app/stores/MainStore";
import Reviews from "./Reviews";
import { observer } from "mobx-react-lite";

const TestimonialCarousel = () => {
  const { Testimonials } = useContext(MainStore);

  return (
    <Segment>
      <Grid columns={2} relaxed="very" stackable style={{marginTop: '2em'}}>
        <Grid.Column>
          <Carousel edgeEasing="easeOutCirc" cellSpacing={20}>
            {Testimonials?.map(review => (
              <Reviews key={review.id} review={review} />
            ))}
          </Carousel>
        </Grid.Column>

        <Grid.Column verticalAlign="middle" style={{ marginBottom: "2em" }}>
          <Header as="h2" icon textAlign="center">
            <MediaQuery maxDeviceWidth={767}>
              <Divider horizontal>
                <Icon name="comments" circular />
              </Divider>
            </MediaQuery>
            <MediaQuery minDeviceWidth={768}>
              <Icon name="comments" circular />
            </MediaQuery>
            <Header.Content>Share your experience</Header.Content>
          </Header>
          <Item.Description
            style={{ textAlign: "center", marginBottom: "15px" }}
          >
            We really appreciate you taking out the time to help us improve our offerings and service!
          </Item.Description>
          <Item style={{ textAlign: "center", marginBottom: "15px" }}>
            <Icon color="grey" size="big" name="star" />
            <Icon color="grey" size="big" name="star" />
            <Icon color="grey" size="big" name="star" />
            <Icon color="grey" size="big" name="star" />
            <Icon color="grey" size="big" name="star" />
          </Item>
          <Button color="blue" content="Feedback" icon="thumbs up" size="big" />
        </Grid.Column>
      </Grid>

      <MediaQuery minDeviceWidth={768}>
        <Divider vertical>
          <Icon color="red" name="heart" />
        </Divider>
      </MediaQuery>
    </Segment>
  );
};

export default observer(TestimonialCarousel);
