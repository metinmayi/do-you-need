import React from "react";
import { BossData } from "../../models/BossData";
import { Player } from "../../models/Player";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import { TableWrapper } from "./tableWrapper";

type Props = {
  bossData: BossData; // Object to structure the table from.
  playerData: Player[]; // Object to fill table with
};
const Table: React.FC<Props> = ({ bossData, playerData }) => {
  return (
    <TableWrapper width={"60%"}>
      <TableHead bossData={bossData}></TableHead>
      <TableBody playerData={playerData}></TableBody>
    </TableWrapper>
  );
};

export { Table };
