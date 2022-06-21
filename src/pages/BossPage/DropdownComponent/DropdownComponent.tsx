import React from "react";
import { Dropdown } from "react-bootstrap";

const DropdownComponent: React.FC = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="testDropdown" variant="secondary">
          Filters
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <Dropdown.Item>Will be able to filter with checkboxes</Dropdown.Item>
          <Dropdown.Item>Placeholder</Dropdown.Item>
          <Dropdown.Item>Placeholder</Dropdown.Item>
          <Dropdown.Item>Placeholder</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export { DropdownComponent };
