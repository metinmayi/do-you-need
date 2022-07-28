import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../customHooks/customHooks";
import { setList } from "../../../../store/features/roster/rosterSlice";
import { PlayerRow } from "./PlayerRow";


const TableBody: React.FC = () => {
  const roster = useAppSelector((state) => state.roster);
  const dispatch = useAppDispatch();
  const togglePlayer = (index: number) => {
    const tempList = [...roster];
    tempList[index].selected = !tempList[index].selected;
    dispatch(setList(tempList));
  }
  return (
    <tbody>
      {roster.map((_, index) => (
        <PlayerRow
          players={roster}
          playerIndex={index}
          setPlayers={togglePlayer}
          key={index}
        />
      ))}
    </tbody>
  );
};

export { TableBody };
