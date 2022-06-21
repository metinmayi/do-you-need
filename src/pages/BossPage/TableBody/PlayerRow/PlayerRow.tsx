import React from "react";
import { Player } from "../../../../models/Player";
import { getIterablePlayer } from "../../../../utils/utils";

interface PlayerRowProps {
  players: Player[];
  setPlayers: Function;
  playerIndex: number;
}
const PlayerRow: React.FC<PlayerRowProps> = ({ players, playerIndex, setPlayers }) => {
  // Breaks the player object into an array
  const player: Player = players[playerIndex];
  const iterablePlayer = getIterablePlayer(player);
  return (
    <tr>
      <td> <input type="checkbox" /></td>
      {iterablePlayer.map(([key, value]) => <td key={key}>{value}</td>)}
    </tr>
  );
};

export default PlayerRow;
