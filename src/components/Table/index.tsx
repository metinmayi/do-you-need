import React from "react";
import { TableWrapper } from "./tableWrapper";

type Props = {
  data: Object; // Object to structure the table from.
};
const Table: React.FC<Props> = ({ data }) => {
  return (
    <TableWrapper>
      <thead></thead>
    </TableWrapper>
  );
};

export { Table };
