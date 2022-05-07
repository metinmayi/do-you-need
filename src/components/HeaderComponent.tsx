// Component responsible for rendering the header content based on login status amongst other things.
import React from "react";
import styled from "styled-components";
import DefaultButton from "./DefaultButton";

type Props = {
  online: boolean;
};
const HeaderComponent: React.FC<Props> = ({ online }) => {
  return (
    <Wrapper>
      <DefaultButton>Login</DefaultButton>
      <DefaultButton>Register</DefaultButton>
    </Wrapper>
  );
};

export default HeaderComponent;

const Wrapper = styled.div`
  display: flex;
  gap: 1%;
  margin-top: 5vh;
  justify-content: center;
  width: 100%;
`;
