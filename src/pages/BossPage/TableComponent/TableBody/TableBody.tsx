import React from "react";
import { useAppSelector } from "../../../../customHooks/customHooks";
import { PlayerRow } from "./PlayerRow";

const TableBody: React.FC = () => {
  const roster = useAppSelector((state) => state.rosterReducer.roster);

  return (
    <tbody>
      {roster.map((_, index) => (
        <PlayerRow
          characterIndex={index}
          character={roster[index]}
          roster={roster}
          key={index}
        />
      ))}
    </tbody>
  );
};

export { TableBody };
