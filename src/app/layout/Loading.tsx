import React, { FC } from "react";
import { Dimmer, Loader } from "semantic-ui-react";

export const Loading: FC<{ msg: string }> = ({ msg }) => {
  return (
    <Dimmer active inverted>
      <Loader size="large">{ msg }</Loader>
    </Dimmer>
  );
};
