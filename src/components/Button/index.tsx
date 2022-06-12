/**
 * This component supports onClick functions and URL redirects via Link.
 */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
  clickFunction?: () => void;
  url?: string;
};
const Button: React.FC<Props> = ({ children, clickFunction, url }) => {
  return (
    <StyledLink
      to={url ? url : ""}
      data-cypress="defaultButton"
      onClick={clickFunction && clickFunction}>
      {children}
    </StyledLink>
  );
};

export { Button };

const StyledLink = styled(Link)`
  border-radius: 5px;
  min-width: 5vw;
  padding: 0.25em 0.5em;
  text-align: center;
  color: white;
  background-color: var(--foregroundColor);
  border: 2px solid white;
  font-family: var(--primaryFamily);
  cursor: pointer;
  text-decoration: none;
`;
