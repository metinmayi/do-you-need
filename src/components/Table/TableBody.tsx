import React from "react";
import { Player } from "../../models/Player";
import { Checkbox } from "../Checkbox";
import { Td } from "./td";
import TankIcon from "../../assets/images/tankIcon.webp";
import HealerIcon from "../../assets/images/healerIcon.webp";
import DPSIcon from "../../assets/images/dpsIcon.webp";

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
            <Td>
              {item[1] === "tank" ? (
                <img src={TankIcon} width="30%"></img>
              ) : item[1] === "healer" ? (
                <img src={HealerIcon} width="30%"></img>
              ) : item[1] === "dps" ? (
                <img src={DPSIcon} width="30%"></img>
              ) : (
                item[1]
              )}
            </Td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export { TableBody };
