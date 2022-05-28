import React from "react";
import { PageWrapper } from "./pageWrapper";
import { Title } from "./title";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { StyledLink } from "./styledLink";

type Props = {};
const LoginPage: React.FC<Props> = () => {
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
        <Button>Login</Button>
        <p style={{ margin: 0 }}>Or</p>
        <Button url="/register">Register</Button>
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
