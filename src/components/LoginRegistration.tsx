import React from "react";
import styled from "styled-components";
import DefaultButton from "./DefaultButton";
import InputComponent from "./InputComponent";

const LoginRegistration: React.FC = () => {
  return (
    <Container>
      <InputComponent id="username" type="text">
        Username/Email
      </InputComponent>
      <InputComponent id="password" type="password">
        Password
      </InputComponent>
      <DefaultButton>Login</DefaultButton>
      <p style={{ margin: 0 }}>Or</p>
      <DefaultButton>Register</DefaultButton>
      <p>
        Forgot your password? Worry not, click <b>here</b>
      </p>
    </Container>
  );
};

export default LoginRegistration;

const Container = styled.div`
  width: min(50vw, 600px);
  height: 50vh;
  border: 1px solid #c4c4c4;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  gap: 3%;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: var(--primaryFamily);
`;
