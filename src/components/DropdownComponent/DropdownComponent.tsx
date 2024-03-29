import React from "react";
import { Dropdown } from "react-bootstrap";
import { convertToDYNName } from "../../utils/convertToDYNName";

interface DropdownComponentProps {
  title: string;
  variant?: string;
  options: string[];
  size?: "sm" | "lg";
  onClick?: Function;
}
export const DropdownComponent: React.FC<DropdownComponentProps> = ({
  title,
  variant = "secondary",
  options,
  size,
  onClick,
}) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant={variant} size={size ? size : undefined}>
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {options.map((option, index) => (
          <Dropdown.Item
            onClick={onClick ? (e) => onClick(e) : undefined}
            key={index}
          >
            {convertToDYNName(option)}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
