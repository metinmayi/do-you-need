import React from "react";
import { useAppSelector } from "../../../../customHooks/customHooks";
import { bossLoot } from "../../../../models/bosses/bossLoot";
import {
  capitalizeFirstLetter,
  convertToDYNName,
} from "../../../../utils/utils";

const TableHead: React.FC = () => {
  const currentBoss = useAppSelector(
    (state) => state.selectedBossReducer.bossName
  );
  const headerItems = [...bossLoot[currentBoss]];
  return (
    <thead>
      <tr style={{ textAlign: "center" }}>
        <td>Selected</td>
        <td>Name</td>
        <td>Role</td>
        {headerItems.map((item, index) => (
          <td key={index}>{convertToDYNName(item)}</td>
        ))}
        <td>Upgrade Count</td>
      </tr>
    </thead>
  );
};

export { TableHead };
