import React, { useState, SyntheticEvent, useContext } from "react";
import {
  Form,
  Button,
  Segment,
  Grid,
  Divider,
  Icon,
  Header
} from "semantic-ui-react";
import MainStore from "../../../app/stores/MainStore";
import { INewTestimony } from "../../../app/models/Testimonial";
import { observer } from "mobx-react-lite";

const FeedbackForm = () => {
  const frmName = "customerFeedback";
  const { newFeedback, SubmitByForm, setSubmitByForm, Submitting } = useContext(
    MainStore
  );
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
    const Testimony: INewTestimony = {
      name: formBody.name,
      tourDestination: formBody.tourDestination,
      review: formBody.review,
      date: Date().toString()
    };

    newFeedback(Testimony, formBody.picture)
      .then(success => {
        if(success) {
          console.log(`new reviews from ${formBody.name} has been created`);
        } else {
          console.log(`new reviews from ${formBody.name} has been rejected`);
        }
      });
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
              accept=".jpg"
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
                <Button
                  name={frmName}
                  onClick={setSubmitByForm}
                  content="Submit"
                  primary
                  loading={frmName === SubmitByForm && Submitting}
                />
              </Divider>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </Segment>
  );
};

export default observer(FeedbackForm);
