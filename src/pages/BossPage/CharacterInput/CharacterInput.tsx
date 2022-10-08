import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { addCharacterUpgrades } from "../../../api/doYouNeed/addCharacterUpgrades";
import { useAppSelector } from "../../../customHooks/useAppSelector";

const INPUT_REGEX = /https:\/\/www.raidbots.com\/simbot\/report\/\w+/;

interface CharacterInputProps {
  setToggleRender: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CharacterInput: React.FC<CharacterInputProps> = ({
  setToggleRender,
}) => {
  const [input, setInput] = useState("");
  const [validInput, setValidInput] = useState(false);
  const guild = useAppSelector((state) => state.guildReducer);

  useEffect(() => {
    if (INPUT_REGEX.test(input)) {
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  }, [input]);

  // Update the roster and update the chara
  async function submitCharacter(e: React.FormEvent) {
    e.preventDefault();
    await addCharacterUpgrades(input, guild);
    setToggleRender((current) => !current);
  }
  return (
    <Form className="mb-2 mt-2" onSubmit={submitCharacter}>
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
