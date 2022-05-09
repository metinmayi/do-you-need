import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  id: string;
};
const InputComponent: React.FC<Props> = ({ children, id }) => {
  return (
    <Wrapper className="dennis">
      <Label htmlFor={id}>{children}</Label>
      <Input type="text" id={id} />
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
  height: 40%;
`;
const Input = styled.input`
  width: 100%;
  height: 60%;
  background-color: var(--borderColor);
  border-radius: 9px;
  border: 0;
  font-size: var(--secondarySize);
  font-family: var(--secondaryFamily);
  font-weight: 600;
  outline: none;
`;
