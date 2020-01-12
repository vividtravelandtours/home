import React, { FC } from "react";
import { Grid, Icon, Header } from "semantic-ui-react";

const EmailConfirmation: FC<{ msg: any }> = ({ msg }) => (
  <Grid.Column>
    <Header as="h2" icon textAlign="center">
      <Icon name="mail" circular />
    </Header>
    <span dangerouslySetInnerHTML={{ __html: msg }}></span>
  </Grid.Column>
);

export default EmailConfirmation;
