import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Form,
  OverlayTrigger,
  Row,
} from "react-bootstrap";
import { FormComponent } from "../../components/Form";
import { renderTooltip } from "./TooltipModal/TooltipModal";
import { LoggedOutHeader } from "../../components/LoggedOutHeader";

type Props = {};
const RegisterPage: React.FC<Props> = () => {
  return (
    <Container fluid>
      <LoggedOutHeader />
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6} lg={4}>
          <FormComponent>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"></Form.Control>
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"></Form.Control>
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control type="password"></Form.Control>
            </Form.Group>
            <Form.Group className="d-flex gap-1 mb-2 mt-3">
              <OverlayTrigger placement="right" overlay={renderTooltip}>
                <Button variant="success" className="border">
                  Register
                </Button>
              </OverlayTrigger>
            </Form.Group>
            <Form.Text>
              Already a member? Click <Link to="/login">here</Link> to login.
            </Form.Text>
          </FormComponent>
        </Col>
      </Row>
    </Container>
  );
};

export { RegisterPage };
