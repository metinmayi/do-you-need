import React from "react";
import { PageWrapper } from "./pageWrapper";
import { Title } from "./title";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "react-bootstrap";
import { StyledLink } from "./styledLink";
import { useRedirect } from "../../utils/utils";

type Props = {};
const LoginPage: React.FC<Props> = () => {
  const redirect = useRedirect();
  return (
    <PageWrapper>
      <Title>Do You Need</Title>
      <Form>
        <Input id="username" type="text">
          Username/Email
        </Input>
        <Input id="password" type="password">
          Password
        </Input>
        <Button variant="secondary" onClick={() => redirect("/login")}>
          Login
        </Button>
        <p style={{ margin: 0 }}>Or</p>
        <Button variant="secondary" onClick={() => redirect("/register")}>
          Register
        </Button>
        <p>
          Forgot your password? Worry not, click{" "}
          <StyledLink to="/recover" data-cypress="recoveryLink">
            here
          </StyledLink>
        </p>
      </Form>
    </PageWrapper>
  );
};

export { LoginPage };
