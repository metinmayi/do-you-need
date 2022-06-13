import React from "react";
import { Container, Row } from "react-bootstrap";

const LandingPageModal: React.FC = () => {
  return (
    <Container className="p-2">
      <Row>
        I see it's your first time visiting. This website is being built for a
        World of Warcraft guild. However, currently, it is only available for
        demonstrational purposes.
      </Row>
      <Row>
        Feel free to have a look around. Registration is disabled, but you can
        login at any time without username/password.
      </Row>
    </Container>
  );
};

export { LandingPageModal };
