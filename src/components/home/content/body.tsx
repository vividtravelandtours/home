import React, { createRef } from "react";
import {
  Segment,
  Container,
  Grid,
  Header,
  Icon,
  Ref,
  Sticky
} from "semantic-ui-react";
import PostList from "./posts/List";
import AboutLocation from "./about/Location";
import MediaQuery from "react-responsive";

const HomeContentBody = () => {
  const contextRef = createRef();

  return (
    <Segment>
      <Container>
        <Ref innerRef={contextRef}>
          <Grid>
            <Grid.Row>
              <Grid.Column width="16">
                <Header style={{ marginTop: "2em" }} as="h2">
                  <Icon color="red" name="announcement" />
                  <Header.Content>Anouncement</Header.Content>
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <MediaQuery maxDeviceWidth={900}>
                <Grid.Column width="16">
                  <PostList />
                </Grid.Column>
                <Grid.Column width="16">
                  <Sticky context={contextRef}>
                    <AboutLocation />
                  </Sticky>
                </Grid.Column>
              </MediaQuery>
              <MediaQuery minDeviceWidth={901}>
                <Grid.Column width="10">
                  <PostList />
                </Grid.Column>
                <Grid.Column width="6">
                  <Sticky context={contextRef}>
                    <AboutLocation />
                  </Sticky>
                </Grid.Column>
              </MediaQuery>
            </Grid.Row>
          </Grid>
        </Ref>
      </Container>
    </Segment>
  );
};

export default HomeContentBody;
