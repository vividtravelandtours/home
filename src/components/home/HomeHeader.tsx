import React from "react";
import { Segment, Item, Header, Icon, Button } from "semantic-ui-react";

const HomeHeader = () => {
  return (
    <Segment className="home-header">
      <Item.Group>
        <Item>
          <Header as="h2" icon>
            <Icon name="plane" />
            <span>Vivid Travel and Tours</span>
            <Header.Subheader>
              We make your travel experience colorful
            </Header.Subheader>
          </Header>
        </Item>
        <Item>
          <Button.Group>
            <Button color="blue">Domestic Tours</Button>
            <Button.Or />
            <Button color="green">International Tours</Button>
          </Button.Group>
        </Item>
      </Item.Group>
    </Segment>
  );
};

export default HomeHeader;