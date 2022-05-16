import React from "react";
import { StyledInput } from "./styledInput";
import { Label } from "./label";
import { Wrapper } from "./wrapper";

type Props = {
  children: React.ReactNode;
  id: string;
  type: string;
};
const Input: React.FC<Props> = ({ children, id, type }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{children}</Label>
      <StyledInput type={type} id={id} />
    </Wrapper>
  );
};

export { Input };
