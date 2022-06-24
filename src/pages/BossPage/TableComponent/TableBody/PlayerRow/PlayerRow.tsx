import React from "react";
import { classToColor } from "../../../../../models/Classes";
import { Player } from "../../../../../models/Player";
import { getIterablePlayer } from "../../../../../utils/utils";
import { RoleIcon } from "../RoleIcon/RoleIcon";

interface PlayerRowProps {
  players: Player[];
  setPlayers: Function;
  playerIndex: number;
}
const PlayerRow: React.FC<PlayerRowProps> = ({
  players,
  playerIndex,
  setPlayers,
}) => {
  // Breaks the player object into an array
  const player: Player = players[playerIndex];
  const iterablePlayer = getIterablePlayer(player);

  // Function for updating players state to reflect the "selected" values.
  const toggleSelected = (playerIndex: number) => {
    const newPlayers = [...players];
    newPlayers[playerIndex].selected = !newPlayers[playerIndex].selected;
    setPlayers(newPlayers);
  };
  return (
    <tr style={{ textAlign: "center" }}>
      <td className="align-middle">
        {" "}
        <input
          type="checkbox"
          checked={player.selected}
          onChange={() => toggleSelected(playerIndex)}
        />
      </td>
      <td
        className="align-middle"
        style={{ color: classToColor[player.class] }}>
        {player.name}
      </td>
      <td className="align-middle">
        <RoleIcon role={player.role} />
      </td>
      {iterablePlayer.map(([key, value]) => (
        <td className="align-middle" key={key}>
          {key === "upgradeCount"
            ? value
            : value.percentageDps
            ? `${value.percentageDps} (${value.rawDps})`
            : "-"}
        </td>
      ))}
    </tr>
  );
};

export default PlayerRow;
