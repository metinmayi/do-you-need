import React from "react";
import { Container } from "../ImageTitle/imageTitleContainer";

type Props = {
  image: string;
  children: React.ReactNode;
};
const ImageTitle: React.FC<Props> = ({ image, children }) => {
  return <Container image={image}>{children}</Container>;
};

export { ImageTitle };
