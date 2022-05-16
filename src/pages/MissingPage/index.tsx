import React from "react";
import { Wrapper } from "./wrapper";
import { StyledLink } from "./link";

const MissingPage: React.FC = () => {
  return (
    <Wrapper>
      <h1>Oops! Site not found</h1>
      <StyledLink to="/">Back to homepage</StyledLink>
    </Wrapper>
  );
};

export { MissingPage };
