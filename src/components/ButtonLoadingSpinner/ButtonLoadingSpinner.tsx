import spinner from "../../assets/images/loadingSpinner.svg";
import { StyledComponentWrapper } from "./StyledComponentWrapper";
import { StyledImageWrapper } from "./StyledImageWrapper";
interface LoadingSpinnerInterface {
  children: any;
}

export const ButtonLoadingSpinner: React.FC<LoadingSpinnerInterface> = ({
  children,
}) => {
  return (
    <StyledComponentWrapper>
      <StyledImageWrapper>
        <img src={spinner} alt="loading..." style={{ height: "100%" }}></img>
      </StyledImageWrapper>
      {children}
    </StyledComponentWrapper>
  );
};
