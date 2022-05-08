import React from "react";
import styled from "styled-components";
import "../index.css";

type Props = {
  variant?: string;
  children?: React.ReactNode;
};
const DefaultButton: React.FC<Props> = ({ variant = "default", children }) => {
  return <Button variant={variant}>{children}</Button>;
};

export default DefaultButton;

type ButtonProps = {
  variant: string;
};
const Button = styled.a<ButtonProps>`
  display: flex;
  border-radius: 3px;
  width: 8vw;
  height: 3.5vh;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: white;
  background-color: var(--foregroundColor);
  border: 2px solid white;
  font-family: var(--primaryFamily);
  font-size: var(--secondarySize);
  cursor: default;
`;
