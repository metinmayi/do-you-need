import React from "react";
import { ClassColor } from "../../../../../models/Classes";
import { IPlayer } from "../../../../../models/Player";
// import { getIterablePlayer } from "../../../../../utils/utils";
import { RoleIcon } from "../RoleIcon/RoleIcon";

interface PlayerRowProps {
  players: IPlayer[];
  setPlayers: Function;
  playerIndex: number;
}
const PlayerRow: React.FC<PlayerRowProps> = ({
  players,
  playerIndex,
  setPlayers,
}) => {
  // Breaks the player object into an array
  const player: IPlayer = players[playerIndex];
  // const iterablePlayer = getIterablePlayer(player);
  // const array = Object.entries(iterablePlayer);

  // Function for updating players state to reflect the "selected" values.
  const toggleSelected = (playerIndex: number) => {
    const newPlayers = [...players];
    newPlayers[playerIndex].selected = !newPlayers[playerIndex].selected;
    setPlayers(newPlayers);
  };
  return (
    <tr style={{ textAlign: "center" }}>
      <td className="align-middle">
        <input
          type="checkbox"
          checked={player.selected}
          onChange={() => toggleSelected(playerIndex)}
        />
      </td>
      <td
        className="align-middle"
        style={{ color: ClassColor[player.className] }}>
        {player.name}
      </td>
      <td className="align-middle">
        <RoleIcon role={player.role} />
      </td>
      {player.playerUpgrades.map((upgrade) => (
        <td className="align-middle" key={`key:${upgrade.itemType}`}>
          {`${upgrade.percentageDps}% (${upgrade.rawDps})`}
        </td>
      ))}
      <td className="align-middle">{player.upgradeCount}</td>
    </tr>
  );
};

export default PlayerRow;
