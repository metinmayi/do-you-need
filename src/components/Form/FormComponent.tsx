import React from "react";
import { StyledForm } from "./styledForm";

interface FormComponentProps {
  children: JSX.Element[];
}
const FormComponent: React.FC<FormComponentProps> = ({ children }) => {
  return <StyledForm>{children}</StyledForm>;
};

export { FormComponent };
