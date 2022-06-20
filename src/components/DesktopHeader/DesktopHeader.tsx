import React from "react";
import { Title } from "./title";
import Logo from "../../assets/images/Lootbag.png";
import { Button, Col, Row } from "react-bootstrap";

const DesktopHeader: React.FC = () => {
  return (
    <Row className="d-flex justify-content-center p-1">
      <Col xs={1}>
        <img src={Logo} alt="Not found" style={{ width: "100%" }} />
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

export { DesktopHeader };
