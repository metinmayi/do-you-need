import styled from "styled-components";

export const Container = styled.div`
  width: min(50vw, 600px);
  height: 50vh;
  border: 1px solid #c4c4c4;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  gap: 3%;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: var(--primaryFamily);
`;
