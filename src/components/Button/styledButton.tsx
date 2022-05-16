import styled from "styled-components";

export const StyledButton = styled.button`
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
`;
