import React from "react";
import { Col, Row } from "react-bootstrap";
import Logo from "../../assets/images/Lootbag.png";

const LoggedOutHeader: React.FC = () => {
  return (
    <Row className="d-flex justify-content-center mt-5">
      <Col xs={8} sm={6} md={4} lg={2}>
        <img src={Logo} width="100%" height="100%"></img>
      </Col>
    </Row>
  );
};

export { LoggedOutHeader };
