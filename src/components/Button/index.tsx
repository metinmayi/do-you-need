import React from "react";
import { StyledButton } from "./styledButton";

type Props = {
  children?: React.ReactNode;
};
const Button: React.FC<Props> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export { Button };
