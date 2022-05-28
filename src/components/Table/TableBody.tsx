import React from "react";
import { Player } from "../../models/Player";
import { Checkbox } from "../Checkbox";
import { Td } from "./td";

type Props = {
  data: Player[];
};
const TableBody: React.FC<Props> = ({ data }) => {
  return (
    <tbody>
      {data.map((player) => (
        <tr>
          <Td>
            <Checkbox></Checkbox>
          </Td>
          {Object.entries(player).map((item) => (
            <Td>{item[1]}</Td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export { TableBody };
