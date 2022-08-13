import React from "react";
import { Card } from "react-bootstrap";
import { useAppSelector } from "../../../customHooks/customHooks";
import { IPlayer } from "../../../models/Player";
import { ListItem } from "./ListItem";

const RosterList: React.FC = () => {
  const roster = useAppSelector((state) => state.rosterReducer.roster);
  const roles = ["tank", "healer", "dps"];
  const bigArray: [IPlayer[], IPlayer[], IPlayer[]] = [[], [], []];

  const [tanks, healers, dps] = roster.reduce((memo, player) => {
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
