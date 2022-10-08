import React from "react";
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
      memo[roles.indexOf(player.role)].push(player);
    }
    return memo;
  }, bigArray);

  const selectedPlayers = tanks.length + healers.length + dps.length;

  return (
    <section className="text-center">
      <h5>
        {selectedPlayers === 0
          ? "No characters selected"
          : `Selected characters: ${selectedPlayers}/20`}
      </h5>
      <div className="d-flex justify-content-evenly mt-3">
        {tanks.length > 0 && <ListItem characters={tanks} />}
        {healers.length > 0 && <ListItem characters={healers} />}
        {dps.length > 0 && <ListItem characters={dps} />}
      </div>
    </section>
  );
};

export { RosterList };
