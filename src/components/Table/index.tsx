import React from "react";
import { BossData } from "../../models/BossData";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import { TableWrapper } from "./tableWrapper";

type Props = {
  data: BossData; // Object to structure the table from.
};
const Table: React.FC<Props> = ({ data }) => {
  return (
    <TableWrapper>
      <TableHead data={data.bossItems}></TableHead>
      <TableBody data={data.players}></TableBody>
    </TableWrapper>
  );
};

export { Table };
