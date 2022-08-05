import { Button, OverlayTrigger } from 'react-bootstrap';
import { renderTooltip } from './TooltipModal/TooltipModal';

export const TooltipOverlay: React.FC = () => {
  return (
    <OverlayTrigger placement="right" overlay={renderTooltip}>
      <div className="buttonWrapper">
        <Button variant="success" className="border" disabled={true}>
          Register
        </Button>
      </div>
    </OverlayTrigger>
  );
};
