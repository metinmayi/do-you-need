import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  id: string;
  type: string;
};
const InputComponent: React.FC<Props> = ({ children, id, type }) => {
  return (
    <Wrapper className="dennis">
      <Label htmlFor={id}>{children}</Label>
      <Input type={type} id={id} />
    </Wrapper>
  );
};

export default InputComponent;

const Wrapper = styled.div`
  width: 50%;
  height: 15%;
  font-family: var(--primaryFamily);
`;
const Label = styled.label`
  height: 60%;
`;
const Input = styled.input`
  width: 100%;
  height: 40%;
  background-color: var(--borderColor);
  border-radius: 9px;
  border: 0;
  font-size: var(--secondarySize);
  font-family: var(--secondaryFamily);
  font-weight: 600;
  outline: none;
  padding: 3%;
`;
