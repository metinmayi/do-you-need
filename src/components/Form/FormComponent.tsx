import React from "react";
import { StyledForm } from "./styledForm";

interface FormComponentProps {
  children: JSX.Element[];
  className?: string;
}
const FormComponent: React.FC<FormComponentProps> = ({
  children,
  className,
}) => {
  return <StyledForm className={className}>{children}</StyledForm>;
};

export { FormComponent };
