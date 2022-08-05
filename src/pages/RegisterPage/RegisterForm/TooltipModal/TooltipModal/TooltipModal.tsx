import React from 'react';
import { Tooltip, TooltipProps } from 'react-bootstrap';

const renderTooltip: React.FC<TooltipProps> = (props) => {
  return (
    <Tooltip id="button-tooltip" {...props}>
      Fill in all details to continue
    </Tooltip>
  );
};

export { renderTooltip };
