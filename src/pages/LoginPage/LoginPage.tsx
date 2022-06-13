import React from "react";
import { PageWrapper } from "./pageWrapper";
import { Title } from "./title";
import { Col, Container, Form, Row} from "react-bootstrap";
// import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "react-bootstrap";
import { StyledLink } from "./styledLink";
import { useRedirect } from "../../utils/utils";
import styled from 'styled-components';

type Props = {};
const LoginPage: React.FC<Props> = () => {
  const redirect = useRedirect();
  return (

<Container fluid>
    <Row className="text-center">
        <Title>Do You Need</Title>
    </Row>
    <Row className="justify-content-center mt-4">
        <Col xs={3}>
        <StyledForm >
        <Form.Group className="mb-3">
            <Form.Label>Username/Email</Form.Label>
            <Form.Control type="username"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"></Form.Control>
        </Form.Group>
        <Form.Group className="d-flex gap-1 mb-2">
            <Button variant="secondary" type="submit">Login</Button>
            <Button variant="danger" type="submit">Forgot Password</Button>
        </Form.Group>
        <Form.Text>Already registered? Click here to login</Form.Text>
    </StyledForm>
        </Col>
    </Row>
</Container>
  );
};

const StyledForm = styled(Form)`
padding: 4%;
// border: 1px solid #c4c4c4;
border-radius: 5%;
color: white;`
export { LoginPage };
