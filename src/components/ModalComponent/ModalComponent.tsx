import React from "react";
import { Button, Modal } from "react-bootstrap";

type ModalComponentProps = {
  title?: string;
  Component: React.FC;
  handleClick?: () => void;
};
const ModalComponent: React.FC<ModalComponentProps> = ({
  Component,
  title,
  handleClick,
}) => {
  return (
    <Modal show={true} className="text-secondary">
      {title && (
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>
        <Component></Component>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleClick && handleClick()}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export { ModalComponent };
