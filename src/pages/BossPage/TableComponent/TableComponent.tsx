import React from "react";
import { Table } from "react-bootstrap";
import spinner from "../../../assets/images/loadingSpinner.svg";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { useAppSelector } from "../../../customHooks/customHooks";


const TableComponent: React.FC = () => {
  const roster = useAppSelector((state) => state.roster);
  return roster.length > 0 ? (
    <Table variant="dark" striped hover responsive>
      <TableHead/>
      <TableBody/>
    </Table>
  ) : (
    <>
      <Table variant="dark" striped hover responsive>
        <TableHead/>
      </Table>
      <img src={spinner} alt="loading..."></img> <h3>Loading Table</h3>
    </>
  );
};

export { TableComponent };
