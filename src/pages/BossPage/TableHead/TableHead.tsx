import React from "react";
import { HeaderData } from "../../../models/HeaderData";
import { capitalizeFirstLetter } from "../../../utils/utils";

interface TableHeadProps {
    headerItems: HeaderData[]
}
const TableHead:React.FC<TableHeadProps> = ({ headerItems }) => {
    return <thead>
        <tr>
            <td>Selected</td>
            <td>Name</td>
            <td>Role</td>
            {headerItems.map((item) => <td>{capitalizeFirstLetter(item)}</td>)}
            <td>Upgrade Count</td>
        </tr>
    </thead>
}

export {TableHead};