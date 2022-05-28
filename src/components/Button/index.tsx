/**
 * This component supports onClick functions and URL redirects via Link.
 */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

type Props = {
  children?: React.ReactNode;
  clickFunction?: () => void;
  url?: string;
  type?: string;
};
const Button: React.FC<Props> = ({ children, clickFunction, url, type }) => {
  return (
    <StyledLink
      to={url ? url : ""}
      data-cypress="defaultButton"
      onClick={clickFunction && clickFunction}>
      {children}
      {type === "dropdown" && <FontAwesomeIcon icon={faAngleDown} />}
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
