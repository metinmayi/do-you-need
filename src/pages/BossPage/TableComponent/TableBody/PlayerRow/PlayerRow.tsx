import React, { useEffect, useState } from "react";
import { ClassColors } from "../../../../../models/ClassColors";
import { ICharacterUpgrade } from "../../../../../models/ICharacterUpgrades";
import { capitalizeFirstLetter } from "../../../../../utils/utils";
import { RoleIcon } from "../RoleIcon/RoleIcon";

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
  // The upgrades are an object, we want to iterate it so we turn it into an array
  const [upgrades, setUpgrades] = useState(Object.entries(character.upgrades));
  useEffect(() => {
    setUpgrades(Object.entries(character.upgrades));
  }, [roster]);

  return (
    <tr style={{ textAlign: "center" }}>
      <td className="align-middle">
        <input type="checkbox" checked={character.selected} />
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
    </tr>
  );
};

export default PlayerRow;
