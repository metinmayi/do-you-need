import React from "react";
import { Title } from "./title";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormComponent } from "../../components/Form";
import { Link } from "react-router-dom";

type Props = {};
const LoginPage: React.FC<Props> = () => {
  return (
    <Container fluid>
      <Row className="text-center mb-5">
        <Title>Do You Need</Title>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6} lg={4}>
          <FormComponent className="mt-5">
            <Form.Group className="mb-3">
              <Form.Label>Username/Email</Form.Label>
              <Form.Control type="username"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"></Form.Control>
            </Form.Group>
            <Form.Group className="d-flex gap-1 mb-2">
              <Button variant="secondary" type="submit" className="border">
                Login
              </Button>
              <Button variant="danger" type="submit" className="border">
                Register
              </Button>
            </Form.Group>
            <Form.Text>
              Forgot your password? Click <Link to="/register">here</Link> to
              restore it.
            </Form.Text>
          </FormComponent>
        </Col>
      </Row>
    </Container>
  );
};

export { LoginPage };
