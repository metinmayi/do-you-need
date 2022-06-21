import React, { useEffect, useState } from "react";
import { Col, Container, Table, Row } from "react-bootstrap";
import { DesktopHeader } from "../../components/DesktopHeader";
import { MobileHeader } from "../../components/MobileHeader";
import { useMediaQuery } from "../../customHooks/customHooks";
import { VigilantGuardian } from "../../models/Bosses";
import { TableHead } from "./TableHead";
import { HeaderData } from "../../models/HeaderData";
import { TableBody } from "./TableBody";
import { Player } from "../../models/Player";
import { getPlayers } from "../../api/players";
import spinner from "../../assets/images/loadingSpinner.svg";

const BossPage: React.FC = () => {
  // Load Boss
  const boss: HeaderData[] = [...VigilantGuardian];

  // Initiated the players state.
  const [players, setPlayers] = useState<Player[]>([]);
  useEffect(() => {
    const fetchPlayers = async () => {
      const fetchedPlayers: Player[] = await getPlayers();
      setPlayers(fetchedPlayers);
    };
    fetchPlayers();
  }, []);

  // Checks if mobile
  const isMobile = useMediaQuery(900);

  return (
    <Container fluid>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      <Row>
        <Col xs={12} sm={10} className="text-center">
          {players.length > 0  ?             <Table variant="dark" striped hover responsive>
              <TableHead headerItems={boss}/>
              <TableBody players={players} setPlayers={setPlayers}/>
            </Table> : <><img src={spinner} alt="loading..."></img> <h3>Loading Table</h3></>}
        </Col>
      </Row>
    </Container>
  );
};

export { BossPage };
