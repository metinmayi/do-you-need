import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #a00;
  cursor: pointer;
  //   transition: 0.25s;
  &:hover {
    color: #f00;
  }
`;
