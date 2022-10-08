import React, { useEffect, useState } from "react";
import { updateCharacterSelected } from "../../../../../api/doYouNeed/updateCharacterSelected";
import { useAppDispatch } from "../../../../../customHooks/useAppDispatch";
import { useAppSelector } from "../../../../../customHooks/useAppSelector";
import { ClassColors } from "../../../../../models/ClassColors";
import { ICharacterUpgrade } from "../../../../../models/ICharacterUpgrades";
import { setRoster } from "../../../../../store/features/roster/rosterSlice";
import { capitalizeFirstLetter } from "../../../../../utils/capitalizeFirstLetter";
import { RoleIcon } from "../RoleIcon/RoleIcon";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { StyledFontAwesomeIcon } from "../../TableHead/StyledFontAwesomeIcon/StyledFontAwesomeIcon";

interface PlayerRowProps {
  characterIndex: number;
  character: ICharacterUpgrade;
  roster: ICharacterUpgrade[];
}

const PlayerRow: React.FC<PlayerRowProps> = ({
  characterIndex,
  character,
  roster,
}) => {
  const guild = useAppSelector((state) => state.guildReducer);
  const bossName = useAppSelector(
    (state) => state.selectedBossReducer.bossName
  );
  const dispatch = useAppDispatch();
  const upgrades = Object.entries(character.upgrades);

  async function updateSelected() {
    const newRoster = structuredClone(roster);
    newRoster[characterIndex].selected = !character.selected;
    await updateCharacterSelected(character, guild, bossName);
    dispatch(setRoster(newRoster));
  }

  return (
    <tr style={{ textAlign: "center" }}>
      <td className="align-middle">
        <input
          type="checkbox"
          checked={character.selected}
          onChange={updateSelected}
        />
      </td>
      <td
        className="align-middle"
        style={{ color: ClassColors[character.class] }}
      >
        {capitalizeFirstLetter(character.name)}
      </td>
      <td className="align-middle">
        <RoleIcon role={character.role} />
      </td>
      {upgrades.map((upgrade, index) => (
        <td
          className="align-middle"
          key={`key:${character.name} -${character.name} ${index}`}
        >
          {upgrade[1]}
        </td>
      ))}
      <td>
        <StyledFontAwesomeIcon
          icon={faTrashCan}
          size="lg"
          title="Remove character"
        />
      </td>
    </tr>
  );
};

export default PlayerRow;
