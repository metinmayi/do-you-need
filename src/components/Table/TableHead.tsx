import React from "react";
import styled from "styled-components";
import { BossItems } from "../../models/BossItems";
import { Th } from "./th";

type Props = {
  data: BossItems;
};
const TableHead: React.FC<Props> = ({ data }) => {
  return (
    <thead>
      <tr>
        <Th>Selected</Th>
        <Th>Name</Th>
        <Th>Role</Th>
        {Object.entries(data).map(
          (keyValue) =>
            keyValue[1] && (
              <Th>
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
