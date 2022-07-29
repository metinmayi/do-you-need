import React from "react";
import { useAppDispatch } from "../../../../../customHooks/customHooks";
import { ClassColor } from "../../../../../models/Classes";
import { IPlayer } from "../../../../../models/Player";
import { setList } from "../../../../../store/features/roster/rosterSlice";
import { RoleIcon } from "../RoleIcon/RoleIcon";

interface PlayerRowProps {
  playerIndex: number,
  player: IPlayer
  roster: IPlayer[]
}
const PlayerRow: React.FC<PlayerRowProps> = ({
  playerIndex,
  player,
  roster
}) => {
  const dispatch = useAppDispatch();
  const toggleSelected = (playerIndex: number) => {
    const copiedRoster = structuredClone(roster);
    copiedRoster[playerIndex].selected = !copiedRoster[playerIndex].selected;
    dispatch(setList(copiedRoster));
  }

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
