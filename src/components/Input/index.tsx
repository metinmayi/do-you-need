import React, { ReactFragment } from "react";
import { StyledInput } from "./styledInput";
import { Wrapper } from "./wrapper";

type Props = {
  children: ReactFragment;
  id: string;
  type: string;
};
const Input: React.FC<Props> = ({ children, id, type }) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{children}</label>
      <StyledInput type={type} id={id} name={id} />
    </Wrapper>
  );
};

export { Input };
