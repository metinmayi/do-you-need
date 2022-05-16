import React from "react";
import { LoginRegistration } from "./LoginRegistration";
import { Wrapper } from "./wrapper";
import { Title } from "./title";

type Props = {};
const LoginPage: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Title>Do You Need</Title>
      <LoginRegistration></LoginRegistration>
    </Wrapper>
  );
};

export { LoginPage };
