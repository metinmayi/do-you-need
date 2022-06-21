import React from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

const PlayerInput: React.FC = () => {
  return (
    <Form className="mb-2 mt-2">
      <InputGroup>
        <FormControl placeholder="Insert Raidbots link" />
        <Button variant="secondary">Add player</Button>
      </InputGroup>
      <Form.Text>
        Sample link:
        https://www.raidbots.com/simbot/report/uqMnHDXNkUzdixTEdsxLmX
      </Form.Text>
    </Form>
  );
};

export { PlayerInput };
