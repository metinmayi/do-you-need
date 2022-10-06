import React from "react";
import { Card } from "react-bootstrap";
import { ClassColors } from "../../../../models/ClassColors";
import { ICharacterUpgrade } from "../../../../models/ICharacterUpgrades";
import { capitalizeFirstLetter } from "../../../../utils/capitalizeFirstLetter";

interface ListItemProps {
  characters: ICharacterUpgrade[];
}
const ListItem: React.FC<ListItemProps> = ({ characters }) => {
  return (
    <>
      <Card.Text className="m-0 mt-2">
        {capitalizeFirstLetter(characters[0].role)}
      </Card.Text>
      {characters.map((character) => (
        <p
          className="m-0"
          key={character.name + character.role + character.class}
          style={{ color: ClassColors[character.class] }}
        >
          {capitalizeFirstLetter(character.name)}
        </p>
      ))}
    </>
  );
};

export { ListItem };
