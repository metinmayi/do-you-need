import React from "react";
import { useAppDispatch } from "../../../../customHooks/useAppDispatch";
import { useAppSelector } from "../../../../customHooks/useAppSelector";
import { useHeaderColorListener } from "../../../../customHooks/useHeaderColorListener";
import { bossLoot } from "../../../../models/bosses/bossLoot";
import { setRoster } from "../../../../store/features/roster/rosterSlice";
import { convertToDYNName } from "../../../../utils/convertToDYNName";
import { sortBySelected } from "./sortBySelected";
import "./TableHead.css";

const TableHead: React.FC = () => {
  const currentBoss = useAppSelector(
    (state) => state.selectedBossReducer.bossName
  );
  const roster = useAppSelector((state) => state.rosterReducer.roster);
  const dispatch = useAppDispatch();
  const headerItems = [...bossLoot[currentBoss]];
  useHeaderColorListener();

  function sortBy(type: string) {
    if (type === "Selected") {
      dispatch(setRoster(sortBySelected(roster)));
      return;
    }
  }
  return (
    <thead>
      <tr style={{ textAlign: "center" }}>
        <th onClick={(e) => sortBy(e.currentTarget.innerText)}>Selected</th>
        <th onClick={(e) => sortBy(e.currentTarget.innerText)}>Name</th>
        <th onClick={(e) => sortBy(e.currentTarget.innerText)}>Role</th>
        {headerItems.map((item, index) => (
          <th key={index} onClick={(e) => sortBy(e.currentTarget.innerText)}>
            {convertToDYNName(item)}
          </th>
        ))}
        <th onClick={(e) => sortBy(e.currentTarget.innerText)}>
          Upgrade Count
        </th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

export { TableHead };
