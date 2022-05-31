import styled from "styled-components";

type Props = {
  color?: string;
};
const Td = styled.td<Props>`
  // color: ${({ color }) => (color ? color : null)};
  padding: 0.25rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export { Td };
