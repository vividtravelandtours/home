import React, { useContext } from "react";
import { Item } from "semantic-ui-react";
import MainStore from "../../../../app/stores/MainStore";
import { observer } from "mobx-react-lite";
import PostItem from "./Item";
import './Posts.css';

const PostList = () => {
  
  const { Posts } = useContext(MainStore);

  return (
    <Item.Group>
      {
          Posts?.map(post => (
            <Item key={post.id}>
                <PostItem post={post} />
            </Item>
          ))
      }
    </Item.Group>
  );
};

export default observer(PostList);