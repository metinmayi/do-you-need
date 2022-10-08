import React from "react";
import { useAppSelector } from "../../../../customHooks/useAppSelector";
import { useHeaderColorListener } from "../../../../customHooks/useHeaderColorListener";
import { bossLoot } from "../../../../models/bosses/bossLoot";
import { convertToDYNName } from "../../../../utils/convertToDYNName";
import "./TableHead.css";

const TableHead: React.FC = () => {
  const currentBoss = useAppSelector(
    (state) => state.selectedBossReducer.bossName
  );
  const headerItems = [...bossLoot[currentBoss]];
  useHeaderColorListener();
  return (
    <thead>
      <tr style={{ textAlign: "center" }}>
        <th>Selected</th>
        <th>Name</th>
        <th>Role</th>
        {headerItems.map((item, index) => (
          <th key={index}>{convertToDYNName(item)}</th>
        ))}
        <th>Upgrade Count</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

export { TableHead };
