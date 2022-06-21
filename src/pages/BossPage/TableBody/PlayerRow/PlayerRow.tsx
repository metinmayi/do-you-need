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
  
  // Function for updating players state to reflect the "selected" values.
  const toggleSelected = (playerIndex:number) => {
    const newPlayers = [...players];
    newPlayers[playerIndex].selected = !newPlayers[playerIndex].selected;
    setPlayers(newPlayers);
  }
  return (
    <tr>
      <td> <input type="checkbox" checked={player.selected} onClick={() => toggleSelected(playerIndex)} onChange={() => console.log('changed')}/></td>
      {iterablePlayer.map(([key, value]) => <td key={key}>{value}</td>)}
    </tr>
  );
};

export default PlayerRow;
