import spinner from "../../assets/images/loadingSpinner.svg";
interface LoadingSpinnerInterface {
  children: any;
}

export const ButtonLoadingSpinner: React.FC<LoadingSpinnerInterface> = ({
  children,
}) => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          height: "100%",
          transform: "translate(100%)",
          zIndex: "20",
        }}>
        <img src={spinner} alt="loading..." style={{ height: "100%" }}></img>
      </div>
      {children}
    </div>
  );
};
