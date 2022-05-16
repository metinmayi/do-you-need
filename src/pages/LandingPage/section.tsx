import styled from "styled-components";

type SectionType = {
  direction: string;
};

export const Section = styled.section<SectionType>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  justify-content: center;
  gap: 5%;
  width: 62%;
  margin-top: 5vh;
`;
