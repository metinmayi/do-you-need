import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DesktopHeader } from "../../components/DesktopHeader";
import { MobileHeader } from "../../components/MobileHeader";
import { useMediaQuery } from "../../customHooks/customHooks";
import { VigilantGuardian } from "../../models/Bosses";
import { HeaderData } from "../../models/HeaderData";
import { Player } from "../../models/Player";
import { getPlayers } from "../../api/players";
import { TableComponent } from "./TableComponent";

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
          <TableComponent
            boss={boss}
            players={players}
            setPlayers={setPlayers}
          />
        </Col>
      </Row>
    </Container>
  );
};

export { BossPage };
