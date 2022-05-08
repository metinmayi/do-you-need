import React from "react";
import styled from "styled-components";

type Props = {
  image: string;
  children: React.ReactNode;
};
const ImageTitle: React.FC<Props> = ({ image, children }) => {
  return <Container image={image}>{children}</Container>;
};

export default ImageTitle;

type Container = {
  image: string;
};
const Container = styled.div<Container>`
  width: 100%;
  // border: 1px solid gray;
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
