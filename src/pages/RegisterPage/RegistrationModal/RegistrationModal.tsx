import React from "react";
import { Container, Row } from "react-bootstrap";

export const registrationModal: React.FC = () => {
  return (
    <Container className="p-2">
      <Row>
        <p>
          You've successfully registered. Click continue to be forwarded to the
          login page.
        </p>
      </Row>
    </Container>
  );
};
