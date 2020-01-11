import React, { useContext } from "react";
import { Segment, Item, Header, Icon, Button } from "semantic-ui-react";
import MainStore from "../../app/stores/MainStore";
import { observer } from "mobx-react-lite";

const HomeHeader = () => {

  const { HomeInfo } = useContext(MainStore);

  return (
    <Segment className="home-header">
      <Item.Group>
        <Item.Image src={`https://media.graphcms.com/${HomeInfo?.logo.handle}`} />
        <Item>
          <Header as="h2" icon>
            <Icon name="plane" />
            <span>{ HomeInfo?.header }</span>
            <Header.Subheader>
              { HomeInfo?.subHeader }
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

export default observer(HomeHeader);