import React from "react";
import { IPlayer } from "../../../../models/Player";
import { PlayerRow } from "./PlayerRow";

interface TableBodyProps {
  players: IPlayer[];
  setPlayers: Function;
}
const TableBody: React.FC<TableBodyProps> = ({ players, setPlayers }) => {
  return (
    <tbody>
      {players.map((_, index) => (
        <PlayerRow
          players={players}
          playerIndex={index}
          setPlayers={setPlayers}
          key={index}
        />
      ))}
    </tbody>
  );
};

export { TableBody };
