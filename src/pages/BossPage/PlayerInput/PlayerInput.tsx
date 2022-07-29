import React, { useRef } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { addPlayerData } from "../../../api/players";
import { useAppDispatch, useAppSelector } from "../../../customHooks/customHooks";
import { IPlayer } from "../../../models/Player";
import { setList } from "../../../store/features/roster/rosterSlice";

const PlayerInput: React.FC = () => {
  const inputValue = useRef<HTMLInputElement>(null);
  const roster = useAppSelector((state) => state.roster);
  const dispatch = useAppDispatch();
  const updatePlayerList = async () => {
    const receivedPlayer: IPlayer = await addPlayerData(
      inputValue?.current?.value
    );
    const rosterCopy = structuredClone(roster);
    rosterCopy.push(receivedPlayer);
    dispatch(setList(rosterCopy));
  };

  return (
    <Form className="mb-2 mt-2">
      <InputGroup>
        <FormControl placeholder="Insert Raidbots link" ref={inputValue} />
        <Button variant="secondary" onClick={() => updatePlayerList()}>
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
