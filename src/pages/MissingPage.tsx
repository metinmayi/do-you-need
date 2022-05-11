import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MissingPage: React.FC = () => {
  return (
    <Wrapper>
      <h1>Oops! Site not found</h1>
      <StyledLink to="/">Back to homepage</StyledLink>
    </Wrapper>
  );
};

export default MissingPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
`;
