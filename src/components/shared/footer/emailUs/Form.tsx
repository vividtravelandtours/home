import React, { useState, SyntheticEvent, useContext } from "react";
import { Grid, Header, Icon, Form, Button } from "semantic-ui-react";
import Axios from 'axios';
import { observer } from "mobx-react-lite";
import MainStore from "../../../../app/stores/MainStore";
import EmailConfirmation from "./Confirmation";
import { notifyCompany } from "./EmailNotification";

const EmailForm = () => {
  
  const { HomeInfo, formSubmitting, Submitting, setSubmitByForm, SubmitByForm } = useContext(MainStore);
  const [formBody, setFormBody] = useState({ name: '', email: '', cp: 'not provided' , message: ''});
  const [inquired, setInquiry] = useState(false);
  const [confirmation, setConfirmation] = useState('');
  const formName = "EmailUsForm";

  const handleInputOnChange = (event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setFormBody({ ...formBody, [name]: value });
  }

  const handleSubmit = () => {
      let emails = '';
      HomeInfo?.emailAddress.forEach(e => {
            let delim = emails === '' ? '' : ',';
            emails = emails + delim.concat(e);
      });

    formSubmitting(true);
    Axios.post('https://em-emailprovider-service-api.herokuapp.com/vivid_travel_and_tours',{
        To: emails,
        Subject: `Inquiry: ${formBody.name}`,
        Msg: `${notifyCompany(formBody.name, formBody.email, formBody.cp, formBody.message)}`
    })
    .then(response => {
        formSubmitting(false);
        const { msg } = response.data;
        
        setInquiry(true);
        setConfirmation(msg);
    });
  }

  return inquired ? <EmailConfirmation msg={confirmation} /> : (
    <Grid.Column>
      <Header as="h2" icon textAlign="center">
        <Icon name="mail" circular />
        <Header.Content>Message Us</Header.Content>
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          name="name"
          icon="user"
          iconPosition="left"
          label="Name"
          placeholder="Enter your name"
          onChange={handleInputOnChange}
          required
        />
        <Form.Input
          name="email"
          icon="mail"
          iconPosition="left"
          label="Email Address"
          placeholder="Enter your email address"
          onChange={handleInputOnChange}
          required
        />
        <Form.Input
          name="cp"
          icon="mobile"
          iconPosition="left"
          label="Contact Number"
          placeholder="Optional"
          onChange={handleInputOnChange}
        />
        <Form.TextArea onChange={handleInputOnChange} name="message" label="Message" type="Message" required />

        <Button name={formName} onClick={setSubmitByForm} loading={Submitting && SubmitByForm === formName} content="Send" primary />
      </Form>
    </Grid.Column>
  );
};

export default observer(EmailForm);