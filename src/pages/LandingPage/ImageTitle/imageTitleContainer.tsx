import styled from "styled-components";

type ContainerProps = {
  image: string;
};
export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  color: C4C4C4;
  font-size: 1.5rem;
  font-family: var(--primaryFamily);
`;
