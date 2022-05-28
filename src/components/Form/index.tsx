import React, { ReactFragment } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactFragment;
};
const Form: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export { Form };

export const Container = styled.form`
  width: min(50vw, 600px);
  padding: 1% 0;
  border: 1px solid #c4c4c4;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  color: white;
  font-family: var(--primaryFamily);
`;
