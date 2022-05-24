import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Title } from "./title";
import { Wrapper } from "./wrapper";

type Props = {};
const RegisterPage: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Title>Do You Need</Title>
      <Form>
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
        <Button>Register</Button>
        <p>
          Already a user? Click{" "}
          <Link to={"/login"} style={{ color: "white" }}>
            here
          </Link>{" "}
          to login!
        </p>
      </Form>
    </Wrapper>
  );
};

export { RegisterPage };
