import React, { useContext } from "react";
import { Segment, Container, Header, Icon, Item } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import MainStore from "../../../app/stores/MainStore";

const AboutTheCompany = () => {
  const { HomeInfo } = useContext(MainStore);

  return (
    <Segment style={{ padding: "3em 1em", backgroundColor: "#0d0c0b" }}>
      <Container>
        <Header as="h2" icon textAlign="center">
          <Icon style={{backgroundColor: 'white'}} color="orange" name="users" circular />
          <Header.Content>
            <strong style={{ color: "white" }}>About the Company</strong>
          </Header.Content>
        </Header>
        <Item.Description>
          <p style={{ color: "white", letterSpacing: '2px', lineHeight: '1.5', textAlign: 'justify' }}>{HomeInfo?.biography}</p>
        </Item.Description>
      </Container>
    </Segment>
  );
};

export default observer(AboutTheCompany);
