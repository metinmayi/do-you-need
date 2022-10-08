import React from "react";
import { Card } from "react-bootstrap";
import { ClassColors } from "../../../../models/ClassColors";
import { ICharacterUpgrade } from "../../../../models/ICharacterUpgrades";
import { capitalizeFirstLetter } from "../../../../utils/capitalizeFirstLetter";

interface ListItemProps {
  characters: ICharacterUpgrade[];
}
const ListItem: React.FC<ListItemProps> = ({ characters }) => {
  const formattedRole = characters[0].role === "healing" ? "healer" : "healing";
  return (
    <div className="roleList">
      <h6>{capitalizeFirstLetter(formattedRole)}</h6>
      {characters.map((character) => (
        <p
          className="m-0"
          key={character.name + character.role + character.class}
          style={{ color: ClassColors[character.class] }}
        >
          {capitalizeFirstLetter(character.name)}
        </p>
      ))}
    </div>
  );
};

export { ListItem };
