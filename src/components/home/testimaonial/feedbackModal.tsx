import React from "react";
import { Button, Modal } from "semantic-ui-react";
import FeedbackForm from "./feedbackForm";

const FeedBackModal = () => (
  <Modal
    style={{width: '300px'}}
    trigger={
      <Button color="blue" content="Feedback" icon="thumbs up" size="big" />
    }
  >
    <FeedbackForm />
  </Modal>
);

export default FeedBackModal;
