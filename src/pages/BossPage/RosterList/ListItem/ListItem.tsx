import React from "react";
import { Card } from "react-bootstrap";
import { classToColor } from "../../../../models/Classes";
import { Player } from "../../../../models/Player";
import { capitalizeFirstLetter } from "../../../../utils/utils";

interface ListItemProps {
  players: Player[];
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
          key={player.name}
          style={{ color: classToColor[player.class] }}>
          {player.name}
        </p>
      ))}
    </>
  );
};

export { ListItem };
