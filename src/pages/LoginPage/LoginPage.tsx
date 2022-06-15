import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormComponent } from "../../components/Form";
import { Link } from "react-router-dom";
import { useRedirect } from "../../customHooks/customHooks";
import { LoggedOutHeader } from "../../components/LoggedOutHeader";

type Props = {};
const LoginPage: React.FC<Props> = () => {
  const redirect = useRedirect();
  return (
    <Container fluid>
      <LoggedOutHeader />
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
              <Button
                variant="success"
                onClick={() => redirect("/bossPage")}
                className="border">
                Login
              </Button>
              <Button
                variant="secondary"
                type="submit"
                className="border"
                onClick={() => redirect("/register")}>
                Register
              </Button>
            </Form.Group>
            <Form.Text>
              Forgot your password? Click <Link to="/restore">here</Link> to
              restore it.
            </Form.Text>
          </FormComponent>
        </Col>
      </Row>
    </Container>
  );
};

export { LoginPage };
