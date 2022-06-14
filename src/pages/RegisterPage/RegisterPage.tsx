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
import { Title } from "./title";
import { renderTooltip } from "./TooltipModal/TooltipModal";
import Logo from "../../assets/images/Lootbag.png";

type Props = {};
const RegisterPage: React.FC<Props> = () => {
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center mt-5">
        <Col xs={2}>
          <img src={Logo} style={{ height: "100%", width: "100%" }} />
        </Col>
      </Row>
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
    // <Wrapper>
    //   <Title>Do You Need</Title>
    //   <FormComponent>
    //     <Input id="registerUsername" type="text">
    //       Username
    //     </Input>
    //     <Input id="registerEmail" type="email">
    //       Email
    //     </Input>
    //     <Input id="registerPassword" type="password">
    //       Password
    //     </Input>
    //     <Input id="registerRepeatPassword" type="password">
    //       Repeat Password
    //     </Input>
    //     <Button variant="secondary">Register</Button>
    //     <p>
    //       Already a user? Click{" "}
    //       <Link
    //         to={"/login"}
    //         style={{ color: "white" }}
    //         data-cypress="loginLink">
    //         here
    //       </Link>{" "}
    //       to login!
    //     </p>
    //   </FormComponent>
    // </Wrapper>
  );
};

export { RegisterPage };
