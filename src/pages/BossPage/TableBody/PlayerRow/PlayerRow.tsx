import React from "react";
import { classToColor } from "../../../../models/Classes";
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
  
  // Function for updating players state to reflect the "selected" values.
  const toggleSelected = (playerIndex:number) => {
    const newPlayers = [...players];
    newPlayers[playerIndex].selected = !newPlayers[playerIndex].selected;
    setPlayers(newPlayers);
  }
  return (
    <tr>
      <td> <input type="checkbox" checked={player.selected} onChange={() => toggleSelected(playerIndex)}/></td>
      <td style={{color: classToColor[player.class]}}>{player.name}</td>
      {iterablePlayer.map(([key, value]) => <td key={key}>{value ? value : "-"}</td>)}
    </tr>
  );
};

export default PlayerRow;
