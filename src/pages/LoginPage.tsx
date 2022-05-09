import React from "react";
import styled from "styled-components";
import LoginRegistration from "../components/LoginRegistration";

type Props = {};
const LoginPage: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Title>Do You Need</Title>
      <LoginRegistration></LoginRegistration>
    </Wrapper>
  );
};

export default LoginPage;

const Title = styled.p`
  margin: 0;
  font-size: 3.5rem;
  font-family: var(--primaryFamily);
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5%;
  color: var(--foregroundColor);
`;
