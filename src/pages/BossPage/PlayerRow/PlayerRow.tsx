import React from "react";
import { Player } from "../../../models/Player";
import { capitalizeFirstLetter } from "../../../utils/utils";

interface PlayerRowProps {
  player: Player;
}
const PlayerRow: React.FC<PlayerRowProps> = ({ player }) => {
  const iterable = Object.entries(player.tableData);
  console.log(iterable);
  return (
    <tr>
      {iterable.map((keyValue, index) =>
        index === 0 ? (
          <td key={keyValue[0] + keyValue[1]} style={{ textAlign: "center" }}>
            <input type="checkbox" />
          </td>
        ) : (
          <td
            key={keyValue[0] + keyValue[1]}
            style={{ color: index === 1 ? player.classColor : "white" }}>
            {capitalizeFirstLetter(keyValue[1])}
          </td>
        )
      )}
    </tr>
  );
};

export default PlayerRow;
