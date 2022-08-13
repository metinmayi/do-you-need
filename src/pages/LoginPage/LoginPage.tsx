import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormComponent } from "../../components/Form";
import { Link, useNavigate } from "react-router-dom";
import { LoggedOutHeader } from "../../components/LoggedOutHeader";
import { ENVIRONMENT } from "../../config/config";
import { loginUser } from "../../api/authentication.ts/login";

type Props = {};
const LoginPage: React.FC<Props> = () => {
  const handleSubmit = async () => {
    const result = await loginUser(username, password);
    if (result.success) {
      return redirect("/bossPage");
    }
    setError(result.message);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const redirect = useNavigate();
  return (
    <Container fluid>
      <LoggedOutHeader />

      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6} lg={4}>
          <FormComponent className="mt-5">
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                onChange={(e) => setUsername(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}></Form.Control>
              <Form.Text style={{ color: "red" }}>{error}</Form.Text>
            </Form.Group>
            <Form.Group className="d-flex gap-1 mb-2">
              <Button
                variant="success"
                onClick={
                  ENVIRONMENT === "demo"
                    ? () => redirect("/bossPage")
                    : () => handleSubmit()
                }
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
