import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FormComponent } from "../../components/Form";
import { Input } from "../../components/Input";
import { Title } from "./title";
import { Wrapper } from "./wrapper";

type Props = {};
const RegisterPage: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Title>Do You Need</Title>
      <FormComponent>
        <Input id="registerUsername" type="text">
          Username
        </Input>
        <Input id="registerEmail" type="email">
          Email
        </Input>
        <Input id="registerPassword" type="password">
          Password
        </Input>
        <Input id="registerRepeatPassword" type="password">
          Repeat Password
        </Input>
        <Button variant="secondary">Register</Button>
        <p>
          Already a user? Click{" "}
          <Link
            to={"/login"}
            style={{ color: "white" }}
            data-cypress="loginLink">
            here
          </Link>{" "}
          to login!
        </p>
      </FormComponent>
    </Wrapper>
  );
};

export { RegisterPage };
