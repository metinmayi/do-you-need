import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { StyledLink } from "./link";
import { Container } from "./loginRegistrationContainer";

const LoginRegistration: React.FC = () => {
  return (
    <Container>
      <Input id="username" type="text">
        Username/Email
      </Input>
      <Input id="password" type="password">
        Password
      </Input>
      <Button>Login</Button>
      <p style={{ margin: 0 }}>Or</p>
      <Button>Register</Button>
      <p>
        Forgot your password? Worry not, click{" "}
        <StyledLink to="/recover" data-cypress="recoveryLink">
          here
        </StyledLink>
      </p>
    </Container>
  );
};

export { LoginRegistration };
