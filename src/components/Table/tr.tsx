import styled from "styled-components";

type Props = {
  color?: string;
};
const Tr = styled.tr<Props>`
  color: ${({ color }) => (color ? color : null)};
  font-weight: bold;
`;

export { Tr };
