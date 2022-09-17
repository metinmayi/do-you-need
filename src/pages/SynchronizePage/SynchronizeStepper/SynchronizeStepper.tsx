import { Stepper } from "react-form-stepper";

interface SynchronizeStepperProps {
  step: number;
}

export const SynchronizeStepper: React.FC<SynchronizeStepperProps> = ({
  step,
}) => {
  return (
    <Stepper
      style={{ paddingBottom: "0" }}
      steps={[
        { label: "Synchronize" },
        { label: "Select Character" },
        { label: "Guild Status" },
        { label: "Finish Process" },
      ]}
      activeStep={step}
      connectorStateColors={true}
      styleConfig={{
        activeBgColor: "#e49f24",
        completedBgColor: "#e49f24",
        inactiveBgColor: "gray",
        activeTextColor: "white",
        completedTextColor: "white",
        inactiveTextColor: "white",
        size: "2em",
        labelFontSize: "0.875rem",
        circleFontSize: "1rem",
        borderRadius: "50%",
        fontWeight: "500",
      }}
      connectorStyleConfig={{
        activeColor: "#e49f24",
        disabledColor: "gray",
        completedColor: "#e49f24",
        style: "solid",
      }}
    />
  );
};
