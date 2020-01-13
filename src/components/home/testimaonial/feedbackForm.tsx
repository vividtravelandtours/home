import React, { useState, SyntheticEvent } from "react";
import {
  Form,
  Button,
  Segment,
  Grid,
  Divider,
  Icon,
  Header
} from "semantic-ui-react";
import Axios from "axios";
import uniqid from 'uniqid';

const FeedbackForm = () => {
  const [formBody, setFormBody] = useState({
    name: "",
    tourDestination: "",
    review: "",
    date: Date().toString(),
    picture: ""
  });

  const handleFieldOnchange = (
    event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setFormBody({ ...formBody, [name]: value });
  };

  const handleFormSubmit = () => {
    console.log(formBody);

    const fn: string[] = formBody.picture.toString().split('\\');
    console.log(fn[fn.length-1]);
    // Axios.post(
    //   `https://www.filestackapi.com/api/store/S3?key=AqTusWlPTMuGVWthlX3tKz&path=/ee2281c603294f8b9912f6e6b543e5f5-master/${uniqid()}.jpg`,
    //   {
    //     fileUpload: formBody.picture
    //   }
    // ).then(console.log);
  };

  return (
    <Segment placeholder>
      <Header as="h4" icon>
        <Icon circular name="comments" />
        <Divider horizontal>We value your feedback</Divider>
      </Header>
      <Form onSubmit={handleFormSubmit}>
        <Grid columns={1} relaxed="very" stackable>
          <Grid.Column>
            <Form.Input
              name="name"
              icon="user"
              iconPosition="left"
              label="Fullname"
              placeholder="Firstname Lastname"
              onChange={handleFieldOnchange}
            />
            <Form.Input
              name="tourDestination"
              icon="plane"
              iconPosition="left"
              label="Recent Tour"
              type="text"
              placeholder="ex. Singapore"
              onChange={handleFieldOnchange}
            />
            <Form.Input
              name="picture"
              icon="picture"
              iconPosition="left"
              label="Avatar"
              type="file"
              accept=".jpg,.png"
              placeholder="Upload your picture here"
              onChange={handleFieldOnchange}
            />
            <Form.TextArea
              name="review"
              label="Feedback"
              type="text"
              onChange={handleFieldOnchange}
            />
          </Grid.Column>
        </Grid>

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Divider horizontal>
                <Button content="Submit" primary />
              </Divider>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </Segment>
  );
};

export default FeedbackForm;
