import React, { useRef } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { addPlayerData } from "../../../api/players";
import { IPlayer } from "../../../models/Player";

interface IPlayerInput {
  players: IPlayer[];
  setPlayers: Function;
}
const PlayerInput: React.FC<IPlayerInput> = ({ players, setPlayers }) => {
  const inputValue = useRef<HTMLInputElement>(null);

  const updatePlayerList = async () => {
    const receivedPlayer: IPlayer = await addPlayerData(
      inputValue?.current?.value
    );
    const copyOfPlayers = [...players];
    copyOfPlayers.push(receivedPlayer);
    setPlayers(copyOfPlayers);
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
