import React, { useEffect, useState } from "react";
import { getPlayers } from "../../../api/players";
import { Player } from "../../../models/Player";
import { PlayerRow } from "./PlayerRow";


const TableBody:React.FC = () => {
  // Fetch players - MOCK atm
  const [players, setPlayers] = useState<Player[]>([]);
  useEffect(() => {
    const fetchPlayers = async () => {
      const fetchedPlayers: Player[] = await getPlayers();
      setPlayers(fetchedPlayers);
    };
    fetchPlayers();
  }, []);
    return <tbody>
      {players.map((player, index) => <PlayerRow players={players} playerIndex={index} setPlayers={setPlayers} key={index}/>)}
    </tbody>
}

export {TableBody}