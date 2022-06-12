import React from "react";
import { Player } from "../../models/Player";
import { Td } from "./td";
import TankIcon from "../../assets/images/tankIcon.webp";
import HealerIcon from "../../assets/images/healerIcon.webp";
import DPSIcon from "../../assets/images/dpsIcon.webp";
import { Tr } from "./tr";

// This should be an iterable object rather than what it currently is.
// NO logic should need to occor in the component for the rendering to work. (Except for the iteration itself, lel)
type Props = {
  playerData: Player[];
};
const TableBody: React.FC<Props> = ({ playerData }) => {
  return (
    <tbody>
      {playerData.map((player, index) => (
        <Tr key={index} color={player.classColor}>
          <Td>
            <input type="checkbox" checked={player.selected} readOnly></input>
          </Td>
          {Object.entries(player.tableData).map((item, index) => (
            <Td key={index}>
              {item[1] === "tank" ? (
                <img src={TankIcon} alt="Tank Icon" width="30%"></img>
              ) : item[1] === "healer" ? (
                <img src={HealerIcon} alt="Healer Icon" width="30%"></img>
              ) : item[1] === "dps" ? (
                <img src={DPSIcon} alt="DPSIcon" width="30%"></img>
              ) : (
                item[1]
              )}
            </Td>
          ))}
        </Tr>
      ))}
    </tbody>
  );
};

export { TableBody };
