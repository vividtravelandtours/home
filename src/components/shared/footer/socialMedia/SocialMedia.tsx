import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Grid, Header, Icon, Divider } from "semantic-ui-react";
import MainStore from "../../../../app/stores/MainStore";
import MediaQuery from "react-responsive";

const SocialMedia = () => {
  const { SocialNetworks } = useContext(MainStore);

  return (
    <Grid.Column verticalAlign="middle">
      <Header as="h2" icon textAlign="center">
        <MediaQuery maxDeviceWidth={767}>
          <Divider horizontal>
          <Icon name="user" circular />
          </Divider>
        </MediaQuery>
        <MediaQuery minDeviceWidth={768}>
        <Icon name="user" circular />
        </MediaQuery>
        
        <Header.Content>Reach us on social media</Header.Content>
      </Header>
      <div className="social-network">
        {SocialNetworks?.map(sn => (
          <a key={sn.id} href={sn.linkAddress}>
            <div>
              <img
                src={`https://media.graphcms.com/${sn.icon.handle}`}
                alt={sn.alias}
              />
            </div>
          </a>
        ))}
      </div>
    </Grid.Column>
  );
};

export default observer(SocialMedia);
