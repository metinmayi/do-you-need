import React from "react";
import { Card } from "react-bootstrap";
import { ClassColors } from "../../../../models/ClassColors";
import { ICharacter } from "../../../../models/ICharacter";
import { capitalizeFirstLetter } from "../../../../utils/utils";

interface ListItemProps {
  players: ICharacter[];
}
const ListItem: React.FC<ListItemProps> = ({ players }) => {
  return (
    <>
      <Card.Text className="m-0 mt-2">
        {capitalizeFirstLetter(players[0].role)}
      </Card.Text>
      {players.map((player) => (
        <p
          className="m-0"
          key={player.playerName}
          style={{ color: ClassColors[player.className] }}
        >
          {player.playerName}
        </p>
      ))}
    </>
  );
};

export { ListItem };
