import React from "react";
import {
  Segment,
  Grid,
  Container,
  Header,
  Icon
} from "semantic-ui-react";
import TestimonialCarousel from "./Carousel";


const TestimonialSection = () => {
  return (
    <Segment placeholder style={{paddingBottom: '4em'}}>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <Header style={{margin: '2em 0 1em 0'}} as="h2">
                <Icon color="yellow" name='star' />
                <Header.Content>
                  Testimonials
                  <Header.Subheader>We make sure our customers are genuinely happy</Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
              <TestimonialCarousel />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default TestimonialSection;