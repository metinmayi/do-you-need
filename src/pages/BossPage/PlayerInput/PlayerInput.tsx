import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
const INPUT_REGEX = /https:\/\/www.raidbots.com\/simbot\/report\/\w+/;

const PlayerInput: React.FC = () => {
  const [input, setInput] = useState("");
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    if (INPUT_REGEX.test(input)) {
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  }, [input]);

  return (
    <Form className="mb-2 mt-2">
      <InputGroup>
        <FormControl
          placeholder="Insert Raidbots link"
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <Button variant="secondary" type="submit" disabled={!validInput}>
          Add player
        </Button>
      </InputGroup>
      <Form.Text>
        Sample link:
        <p>https://www.raidbots.com/simbot/report/qU8sUeqm5LUn2f37bmSgAW</p>
      </Form.Text>
    </Form>
  );
};

export { PlayerInput };
