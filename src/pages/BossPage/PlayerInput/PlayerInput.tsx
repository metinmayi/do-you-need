import { current } from "@reduxjs/toolkit";
import React, { useEffect, useRef, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { addPlayerData } from "../../../api/players";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../customHooks/customHooks";
import { IPlayer } from "../../../models/Player";
import { setList } from "../../../store/features/roster/rosterSlice";
const INPUT_REGEX = /https:\/\/www.raidbots.com\/simbot\/report\/\w+/;

const PlayerInput: React.FC = () => {
  const [input, setInput] = useState("");
  const [validInput, setValidInput] = useState(false);

  const roster = useAppSelector((state) => state.rosterReducer.roster);
  const dispatch = useAppDispatch();

  async function updateRosterList(e: React.FormEvent) {
    e.preventDefault();
    // const receivedPlayer: IPlayer = await addPlayerData(input);
    // const rosterCopy = structuredClone(roster);
    // rosterCopy.push(receivedPlayer);
    // dispatch(setList(rosterCopy));
  }

  useEffect(() => {
    if (INPUT_REGEX.test(input)) {
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  }, [input]);

  return (
    <Form className="mb-2 mt-2" onSubmit={(e) => updateRosterList(e)}>
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
        https://www.raidbots.com/simbot/report/uqMnHDXNkUzdixTEdsxLmX
      </Form.Text>
    </Form>
  );
};

export { PlayerInput };
