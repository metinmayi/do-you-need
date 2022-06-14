import React from "react";
import { Tooltip, TooltipProps } from "react-bootstrap";

const renderTooltip: React.FC<TooltipProps> = (props) => {
  return (
    <Tooltip id="button-tooltip" {...props}>
      Registration is disabled for demo purposes. Login without any
      username/password
    </Tooltip>
  );
};

export { renderTooltip };
