import styled from "styled-components";

export const StyledUl = styled.ul`
  list-style-type: none;
  display: inline-flex;
  flex-direction: column;
  gap: 5px;
  li {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    gap: 5px;
  }
  li:hover {
    text-decoration: underline;
  }
`;
