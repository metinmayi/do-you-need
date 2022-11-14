import React from "react";
import { useAppDispatch } from "../../../../customHooks/useAppDispatch";
import { useAppSelector } from "../../../../customHooks/useAppSelector";
import { useHeaderColorListener } from "../../../../customHooks/useHeaderColorListener";
import { bossLoot } from "../../../../models/bosses/bossLoot";
import { setRoster } from "../../../../store/features/roster/rosterSlice";
import { convertToDYNName } from "../../../../utils/convertToDYNName";
import { sortByItemUpgrade } from "./sortByItemUpgrade";
import { sortByName } from "./sortByName";
import { sortBySelected } from "./sortBySelected";
import { sortByUpgradeCount } from "./sortByUpgradeCount";
import { StyledTh } from "./StyledTh";
import "./TableHead.css";

const TableHead: React.FC = () => {
  const currentBoss = useAppSelector(
    (state) => state.selectedBossReducer.bossName
  );
  const roster = useAppSelector((state) => state.rosterReducer.roster);
  const dispatch = useAppDispatch();
  const headerItems = [...bossLoot[currentBoss]];
  useHeaderColorListener();

  function sortBy(type: string, index?: number) {
    if (type === "Selected") {
      dispatch(setRoster(sortBySelected(roster)));
      return;
    }

    if (type === "Name") {
      dispatch(setRoster(sortByName(roster)));
      return;
    }

    if (type === "Upgrade Count") {
      dispatch(setRoster(sortByUpgradeCount(roster)));
      return;
    }

    if (index !== undefined) {
      dispatch(setRoster(sortByItemUpgrade(roster, index)));
    }
  }
  return (
    <thead>
      <tr style={{ textAlign: "center" }}>
        <StyledTh onClick={(e) => sortBy(e.currentTarget.innerText)}>
          Selected
        </StyledTh>
        <StyledTh onClick={(e) => sortBy(e.currentTarget.innerText)}>
          Name
        </StyledTh>
        <StyledTh onClick={(e) => sortBy(e.currentTarget.innerText)}>
          Role
        </StyledTh>
        {headerItems.map((item, index) => (
          <StyledTh
            key={index}
            onClick={(e) => sortBy(e.currentTarget.innerText, index)}>
            {convertToDYNName(item)}
          </StyledTh>
        ))}
        <StyledTh onClick={(e) => sortBy(e.currentTarget.innerText)}>
          Upgrade Count
        </StyledTh>
        <StyledTh>Remove</StyledTh>
      </tr>
    </thead>
  );
};

export { TableHead };
