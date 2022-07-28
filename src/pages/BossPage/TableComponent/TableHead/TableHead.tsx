import React from "react";
import { VigilantGuardian } from "../../../../models/Bosses";
import { HeaderData } from "../../../../models/HeaderData";
import { capitalizeFirstLetter } from "../../../../utils/utils";


const TableHead: React.FC = () => {
  const headerItems: HeaderData[] = [...VigilantGuardian];
  return (
    <thead>
      <tr style={{ textAlign: "center" }}>
        <td>Selected</td>
        <td>Name</td>
        <td>Role</td>
        {headerItems.map((item, index) => (
          <td key={index}>{capitalizeFirstLetter(item)}</td>
        ))}
        <td>Upgrade Count</td>
      </tr>
    </thead>
  );
};

export { TableHead };
