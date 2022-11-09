import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { addCharacterUpgrades } from "../../../api/doYouNeed/addCharacterUpgrades";
import { ButtonLoadingSpinner } from "../../../components/ButtonLoadingSpinner/ButtonLoadingSpinner";
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
  const [isLoading, setIsLoading] = useState(false);
  const guild = useAppSelector((state) => state.guildReducer);

  useEffect(() => {
    if (INPUT_REGEX.test(input)) {
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  }, [input]);

  // Update the roster and update the chara
  async function submitCharacter(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.currentTarget.blur();
    setIsLoading(true);
    await addCharacterUpgrades(input, guild);
    setIsLoading(false);
    setToggleRender((current) => !current);
    setInput("");
  }
  return (
    <Form className="mb-2 mt-2">
      <InputGroup>
        <FormControl
          placeholder="Insert Raidbots link"
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <>
          {isLoading ? (
            <ButtonLoadingSpinner>
              <Button
                variant="secondary"
                onClick={(e) => submitCharacter(e)}
                disabled={!validInput}>
                Add player
              </Button>
            </ButtonLoadingSpinner>
          ) : (
            <Button
              variant="secondary"
              onClick={(e) => submitCharacter(e)}
              disabled={!validInput}>
              Add player
            </Button>
          )}
        </>
      </InputGroup>
    </Form>
  );
};
