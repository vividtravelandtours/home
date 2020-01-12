import React, { FC } from "react";
import { Segment, Header, Image, Item, Icon } from "semantic-ui-react";
import { ITestimonial } from "../../../app/models/Testimonial";

const Reviews: FC<{ review: ITestimonial }> = ({ review }) => {
  const readMore = review.review.length > 200 ? <a href={`/Review/${review.id}`}>...Read More</a> : "";
  const msg = review.review.substring(0, 200);

  return (
    <Segment style={{ minHeight: "250px", border: "none", boxShadow: 'none' }}>
      <Header as="h2" icon textAlign="center">
        <Image
          circular
          src={`https://media.graphcms.com/${review.picture.handle}`}
        />
        <Header.Content>{review.name}</Header.Content>
      </Header>
      <Item.Description>
        <p style={{ padding: "0 45px", textAlign: "center" }}>
          <Icon name="quote left" />
          <em>
            {msg}
            {readMore}
          </em>
          <Icon name="quote right" />
        </p>
      </Item.Description>
    </Segment>
  );
};

export default Reviews;
