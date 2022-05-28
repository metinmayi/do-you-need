import React from "react";
import { Player } from "../../models/Player";

type Props = {
  data: Player[];
};
const TableBody: React.FC<Props> = ({ data }) => {
  return (
    <tbody>
      {data.map((player) => (
        <tr>
          <td>Checkbox</td>
          {Object.entries(player).map((item) => (
            <td>{item[1]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export { TableBody };
