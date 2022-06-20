import React, { useState } from "react";
import { Player } from "../../../models/Player";

interface PlayerRowProps {
  players: Player[];
  setPlayers: Function;
  index: number;
}
const PlayerRow: React.FC<PlayerRowProps> = ({ players, index }) => {
  // Breaks the player object into an array
  const player = Object.entries(players[index]);
  const filteredPlayer = player.filter((keyValue) => {
    if (keyValue[0] === "id" || keyValue[0] === "class") {
      return;
    }
    return keyValue;
  });
  const [checked, setChecked] = useState(players[index].selected);
  return (
    <tr>
      {filteredPlayer.map(([key, value]) => (
        <td key={Math.random()}>
          {key === "selected" ? (
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}></input>
          ) : key === "id" || key === "class" ? null : (
            value
          )}
        </td>
      ))}
    </tr>
  );
};

export default PlayerRow;
