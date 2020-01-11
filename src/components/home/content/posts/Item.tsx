import React, { FC } from "react";
import { Card, Icon } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { IPost } from "../../../../app/models/Post";

const PostItem: FC<{ post: IPost }> = ({ post }) => {
  return (
    <Card style={{width: '100%'}}>
      <Card.Content>
        <Card.Header style={{marginTop: '5px'}}>{ post.title }</Card.Header>
        <Card.Meta>
          <Icon name="calendar" />
          <strong>
            Posted: <em>{ new Date(post.updatedAt).toString().split('GMT')[0] }</em>
          </strong>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Card.Description style={{padding: '15px'}}>
          <span dangerouslySetInnerHTML={{ __html: post.content.html}}></span>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default observer(PostItem);
