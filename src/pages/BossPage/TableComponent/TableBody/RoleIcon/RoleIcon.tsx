import React from "react";
import tankIcon from "../../../../../assets/images/tankIcon.webp";
import healerIcon from "../../../../../assets/images/healerIcon.webp";
import dpsIcon from "../../../../../assets/images/dpsIcon.webp";
import { StyledImage } from "./styledImage";

interface RoleIconProps {
  role: "dps" | "healing" | "tank";
}
const RoleIcon: React.FC<RoleIconProps> = ({ role }) => {
  const icon =
    role === "tank" ? tankIcon : role === "healing" ? healerIcon : dpsIcon;
  return <StyledImage src={icon} />;
};
export { RoleIcon };
