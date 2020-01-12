import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import {
  Segment,
  Container,
  Grid,
  Divider,
  Header,
  Icon
} from "semantic-ui-react";
import MainStore from "../../../app/stores/MainStore";
import "./Footer.css";
import SocialMedia from "./socialMedia/SocialMedia";
import EmailForm from "./emailUs/Form";

const Footer = () => {
  const { HomeInfo } = useContext(MainStore);

  return (
    <Segment
      className="footer"
      style={{ padding: "3em 1em", backgroundColor: "#000000" }}
    >
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Divider horizontal>
                <img
                  style={{ height: "100px", width: "auto" }}
                  src={`https://media.graphcms.com/${HomeInfo?.logo.handle}`}
                  alt="logo"
                />
              </Divider>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
              <Header color="yellow" as="h1" icon textAlign="center">
                <Icon style={{backgroundColor: "grey"}} name="call" circular />
                <Header.Content>Contact Us</Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Segment placeholder>
                <Grid columns={2} relaxed="very" stackable>
                  <EmailForm />
                  <SocialMedia />
                </Grid>

                <Divider vertical>Or</Divider>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <div className="legal-text">
                <span>&copy; 2020 All rights reserved</span>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default observer(Footer);
