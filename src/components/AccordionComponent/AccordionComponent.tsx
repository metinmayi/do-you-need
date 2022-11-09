import React from "react";
import { Accordion, Button, Form, useAccordionButton } from "react-bootstrap";

interface props {
  header: string;
}
export const AccordionComponent: React.FC<props> = ({ header }) => {
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <CustomAccordionToggle />
      <Accordion.Collapse eventKey="0">
        <div style={{ userSelect: "none" }}>
          <div>
            <input type="checkbox" name="tank" id="tank" />
            <label htmlFor="tank">Tank</label>
          </div>
          <div>
            <input type="checkbox" name="dps" id="dps" />
            <label htmlFor="dps">DPS</label>
          </div>
          <div>
            <input type="checkbox" name="healer" id="healer" />
            <label htmlFor="healer">Healer</label>
          </div>
        </div>
      </Accordion.Collapse>
    </Accordion>
  );
};

export const CustomAccordionToggle: React.FC = () => {
  const closeAccordion = useAccordionButton("0");

  function toggleCollapse(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.blur();
    closeAccordion(e);
  }
  return (
    <Button
      variant="secondary"
      style={{ width: "50%" }}
      onClick={(e) => toggleCollapse(e)}>
      Filter
    </Button>
  );
};
