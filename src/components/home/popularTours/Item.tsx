import React, { FC } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { IPopular } from "../../../app/models/Popular";

const Tour: FC<{ tour: IPopular }> = ({ tour }) => {
  return (
    <Card style={{marginBottom: '15px', width: '100%'}}>
      <Image
        src={`https://media.graphcms.com/${tour.bannerImage.handle}`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{tour.tourPackage}</Card.Header>
        <Card.Meta>
          <span>{tour.extraInfo}</span>
        </Card.Meta>
        <Card.Description>{tour.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="marker" />
        {tour.tourPackageOption}
      </Card.Content>
    </Card>
  );
};

export default Tour;
