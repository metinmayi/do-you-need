import spinner from "../../assets/images/loadingSpinner.svg";
import { StyledSpinnerWrapper } from "./StyledSpinnerWrapper";
interface LoadingSpinnerInterface {
  text: string;
}
export const LoadingSpinner: React.FC<LoadingSpinnerInterface> = ({ text }) => {
  return (
    <StyledSpinnerWrapper>
      <img src={spinner} alt="loading..."></img>
      <br />
      <p>{text}</p>
    </StyledSpinnerWrapper>
  );
};
