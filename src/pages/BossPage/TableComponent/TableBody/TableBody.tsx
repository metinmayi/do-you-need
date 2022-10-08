import React from "react";
import { useAppSelector } from "../../../../customHooks/useAppSelector";
import { CharacterRow } from "./CharacterRow";

const TableBody: React.FC = () => {
  const roster = useAppSelector((state) => state.rosterReducer.roster);

  return (
    <tbody>
      {roster.map((_, index) => (
        <CharacterRow
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
