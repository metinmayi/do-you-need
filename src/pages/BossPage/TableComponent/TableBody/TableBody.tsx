import React from "react";
import { useAppSelector } from "../../../../customHooks/customHooks";
import { PlayerRow } from "./PlayerRow";


const TableBody: React.FC = () => {
  const roster = useAppSelector((state) => state.roster);

  return (
    <tbody>
      {roster.map((_, index) => (
        <PlayerRow
          playerIndex={index}
          player={roster[index]}
          roster={roster}
          key={index}
        />
      ))}
    </tbody>
  );
};

export { TableBody };
