import React from "react";
import { BossData } from "../../models/BossData";
import { Th } from "./th";

type Props = {
  bossData: BossData;
};
const TableHead: React.FC<Props> = ({ bossData }) => {
  // remove this later. We want the responsible function to simply send already iterable data.
  const iterableData = Object.entries(bossData);
  return (
    <thead>
      <tr>
        <Th>Selected</Th>
        <Th>Name</Th>
        <Th>Role</Th>
        {iterableData.map(
          (keyValue, index) =>
            keyValue[1] && (
              <Th key={index}>
                {
                  // Uppercases The strings
                  keyValue[0].slice(0, 1).toUpperCase() + keyValue[0].slice(1)
                }
              </Th>
            )
        )}
        <Th>Upgrade Count</Th>
      </tr>
    </thead>
  );
};

export { TableHead };
