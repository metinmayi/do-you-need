import React from "react";
import { Card } from "react-bootstrap";
import { useAppSelector } from "../../../customHooks/useAppSelector";
import { ICharacterUpgrade } from "../../../models/ICharacterUpgrades";
import { ListItem } from "./ListItem";

const RosterList: React.FC = () => {
  const roster = useAppSelector((state) => state.rosterReducer.roster);
  const roles = ["tank", "healing", "dps"];
  const bigArray: [
    ICharacterUpgrade[],
    ICharacterUpgrade[],
    ICharacterUpgrade[]
  ] = [[], [], []];

  const [tanks, healers, dps] = roster.reduce((memo, player) => {
    if (player.selected) {
      console.log("Player is selected");
      memo[roles.indexOf(player.role)].push(player);
    }
    return memo;
  }, bigArray);

  const selectedPlayers = tanks.length + healers.length + dps.length;

  return (
    <Card bg="transparent" border="0">
      <Card.Body className="p-0">
        <Card.Title className="text-center">
          {selectedPlayers === 0 ? "No Roster" : `${selectedPlayers}/20`}
        </Card.Title>
        {tanks.length > 0 && <ListItem characters={tanks} />}
        {healers.length > 0 && <ListItem characters={healers} />}
        {dps.length > 0 && <ListItem characters={dps} />}
      </Card.Body>
    </Card>
  );
};

export { RosterList };
