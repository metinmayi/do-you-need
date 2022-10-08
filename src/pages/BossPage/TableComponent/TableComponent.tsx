import React from "react";
import { Col, Table } from "react-bootstrap";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { useAppSelector } from "../../../customHooks/useAppSelector";
import { LoadingSpinner } from "../../../components/LoadingSpinner/LoadingSpinner";
import { RosterList } from "../RosterList";

const TableComponent: React.FC = () => {
  const roster = useAppSelector((state) => state.rosterReducer.roster);

  return roster.length > 0 ? (
    <>
      <Col xs={10}>
        <Table variant="dark" striped hover>
          <TableHead />
          <TableBody />
        </Table>
      </Col>
      <Col style={{ maxHeight: "20vh", position: "sticky", top: "0" }}>
        <RosterList />
      </Col>
    </>
  ) : (
    <>
      <Table variant="dark" striped hover>
        <TableHead />
      </Table>
      <LoadingSpinner text="Loading..." />
    </>
  );
};

export { TableComponent };
