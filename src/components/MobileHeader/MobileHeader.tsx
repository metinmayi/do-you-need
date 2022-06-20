import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Title } from "../DesktopHeader/title";
import Logo from "../../assets/images/Lootbag.png";

const MobileHeader: React.FC = () => {
  return (
    <Row className="d-flex justify-content-center p-1">
      <Col
        xs={4}
        sm={3}
        className="d-flex align-items-center justify-content-end">
        <img src={Logo} alt="Not found" style={{ width: "90%" }} />
      </Col>
      <Col className="d-flex justify-content-end">
        <Title> Vigilant Guardian </Title>
      </Col>
      <Col className="d-flex justify-content-end align-items-center gap-1">
        <Button variant="success" size="lg">
          Bosses
        </Button>
        <Button variant="secondary" size="lg">
          Settings
        </Button>
        <Button variant="danger" size="lg">
          Logout
        </Button>
      </Col>
    </Row>
  );
};

export { MobileHeader };
