import React from "react";
import { useAppSelector } from "../../../../customHooks/useAppSelector";
import { CharacterRow } from "./CharacterRow";

const TableBody: React.FC = () => {
  const roster = useAppSelector((state) => state.rosterReducer.roster);

  return roster.length ? (
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
  ) : (
    <tbody>
      <tr>
        <td colSpan={50} style={{ textAlign: "center", padding: "2%" }}>
          No characters have been added to this guild
        </td>
      </tr>
    </tbody>
  );
};

export { TableBody };
