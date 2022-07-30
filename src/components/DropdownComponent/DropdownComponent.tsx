import React from "react";
import { Dropdown } from "react-bootstrap";

type DropdownComponentProps = {
  title: string;
  variant?: string;
  options: string[];
  size?: "sm" | "lg";
};
export const DropdownComponent: React.FC<DropdownComponentProps> = ({
  title,
  variant = "secondary",
  options,
  size,
}) => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant={variant} size={size ? size : undefined}>
          {title}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {options.map((option) => (
            <Dropdown.Item>{option}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
