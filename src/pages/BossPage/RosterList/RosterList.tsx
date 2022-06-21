import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Player } from "../../../models/Player";
import { ListItem } from "./ListItem";

interface RosterListProps {
  players: Player[];
}
const RosterList: React.FC<RosterListProps> = ({ players }) => {
  const roles = ["tank", "healer", "dps"];
  const bigArray: [Player[], Player[], Player[]] = [[], [], []];

  const [tanks, healers, dps] = players.reduce((memo, player) => {
    if (player.selected) memo[roles.indexOf(player.role)].push(player);
    return memo;
  }, bigArray);

  const selectedPlayers = tanks.length + healers.length + dps.length;

  return (
    <Card bg="transparent" border="0">
      <Card.Body className="p-0">
        <Card.Title className="text-center">
          {selectedPlayers === 0 ? "No Roster" : `${selectedPlayers}/20`}
        </Card.Title>
        {tanks.length > 0 && <ListItem players={tanks} />}
        {healers.length > 0 && <ListItem players={healers} />}
        {dps.length > 0 && <ListItem players={dps} />}
      </Card.Body>
    </Card>
  );
};

export { RosterList };
