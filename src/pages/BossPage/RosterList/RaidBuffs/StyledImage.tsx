import styled from "styled-components";

interface props {
  active: boolean;
}
export const StyledImage = styled.img<props>`
  width: 15%;
  height: 100%;
  filter: ${(props) => (props.active ? "saturate(100%)" : "saturate(0%)")};
  border: ${(props) => (props.active ? "2px solid green" : "1px solid red")};
`;
