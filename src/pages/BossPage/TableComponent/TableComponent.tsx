import React from "react";
import { Table } from "react-bootstrap";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { useAppSelector } from "../../../customHooks/customHooks";
import { LoadingSpinner } from "../../../components/LoadingSpinner/LoadingSpinner";

const TableComponent: React.FC = () => {
  const roster = useAppSelector((state) => state.rosterReducer.roster);
  return roster.length > 0 ? (
    <Table variant="dark" striped hover responsive>
      <TableHead />
      <TableBody />
    </Table>
  ) : (
    <>
      <Table variant="dark" striped hover responsive>
        <TableHead />
      </Table>
      <LoadingSpinner text="Loading..." />
    </>
  );
};

export { TableComponent };
