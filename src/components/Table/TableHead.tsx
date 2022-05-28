import React from "react";
import styled from "styled-components";
import { BossItems } from "../../models/BossItems";

type Props = {
  data: BossItems;
};
const TableHead: React.FC<Props> = ({ data }) => {
  return (
    <thead>
      <tr>
        <th>Selected</th>
        <th>Name</th>
        <th>Role</th>
        {Object.entries(data).map(
          (keyValue) =>
            keyValue[1] && (
              <th>
                {
                  // Uppercases the strings
                  keyValue[0].slice(0, 1).toUpperCase() + keyValue[0].slice(1)
                }
              </th>
            )
        )}
      </tr>
    </thead>
  );
};

export { TableHead };
