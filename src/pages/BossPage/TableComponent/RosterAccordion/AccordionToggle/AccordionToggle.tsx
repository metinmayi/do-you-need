import { Button, useAccordionButton } from "react-bootstrap";

export const AccordionToggle = () => {
  return (
    <Button
      variant="secondary"
      onFocus={(e) => e.currentTarget.blur()}
      onClick={useAccordionButton("0")}
    >
      Show Selected Roster
    </Button>
  );
};
