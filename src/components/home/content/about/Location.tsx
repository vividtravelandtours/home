import React from "react";
import { Card, Icon } from "semantic-ui-react";

const AboutLocation = () => {
  return (
    <Card style={{width: '100%'}}>
      <Card.Content header="Our Location" />
      <Card.Content>
        <iframe
          title="location"
          style={{border: 'none'}}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1930.718739429413!2d121.11463217755428!3d14.574129998763635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c79995ecf367%3A0xd05647809f1b2173!2s2nd%20st.%2C%20Cainta%2C%20Rizal!5e0!3m2!1sen!2sph!4v1578755113205!5m2!1sen!2sph"
          width="100%"
          height="300px"
        ></iframe>
      </Card.Content>
      <Card.Content extra>
        <Icon name="marker" />2nd St, 1900 Cainta Rizal
      </Card.Content>
    </Card>
  );
};

export default AboutLocation;