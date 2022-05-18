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
  if (!url) console.log("No URL");
  return (
    <>
      <StyledLink
        to={url ? url : ""}
        data-cypress="defaultButton"
        onClick={clickFunction && clickFunction}>
        {children}
      </StyledLink>
    </>
  );
};

export { Button };

export const StyledLink = styled(Link)`
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
  cursor: pointer;
  text-decoration: none;
`;
