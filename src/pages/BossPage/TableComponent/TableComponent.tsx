import React from "react";
import { Table } from "react-bootstrap";
import { HeaderData } from "../../../models/HeaderData";
import { IPlayer } from "../../../models/Player";
import spinner from "../../../assets/images/loadingSpinner.svg";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";

interface TableComponentProps {
  boss: HeaderData[];
  players: IPlayer[];
  setPlayers: Function;
}
const TableComponent: React.FC<TableComponentProps> = ({
  boss,
  players,
  setPlayers,
}) => {
  return players.length > 0 ? (
    <Table variant="dark" striped hover responsive>
      <TableHead headerItems={boss} />
      <TableBody players={players} setPlayers={setPlayers} />
    </Table>
  ) : (
    <>
      <Table variant="dark" striped hover responsive>
        <TableHead headerItems={boss} />
      </Table>
      <img src={spinner} alt="loading..."></img> <h3>Loading Table</h3>
    </>
  );
};

export { TableComponent };
