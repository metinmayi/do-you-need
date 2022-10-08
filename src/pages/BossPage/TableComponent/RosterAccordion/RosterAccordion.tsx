import { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAppSelector } from "../../../../customHooks/useAppSelector";
import { RosterList } from "../../RosterList";
import { AccordionToggle } from "./AccordionToggle";

export const RosterAccordion: React.FC = () => {
  return (
    <Accordion className="rosterAccordion" defaultActiveKey={"0"}>
      <AccordionToggle />
      <Accordion.Collapse defaultChecked={false} eventKey="0">
        <RosterList />
      </Accordion.Collapse>
    </Accordion>
  );
};
