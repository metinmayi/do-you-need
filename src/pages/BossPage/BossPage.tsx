import React, { useEffect, useState } from "react";
import { Col, Container, Table, Row } from "react-bootstrap";
import { DesktopHeader } from "../../components/DesktopHeader";
import { MobileHeader } from "../../components/MobileHeader";
import { Player } from "../../models/Player";
import { useMediaQuery } from "../../customHooks/customHooks";
import TableRow from "./TableRow/TableRow";
import { VigilantGuardian } from "../../models/Bosses";
import { getPlayers } from "../../api/players";
import Spinner from "../../assets/images/loadingSpinner.svg";
import { TableHead } from "./TableHead";
import { HeaderData } from "../../models/HeaderData";

const BossPage: React.FC = () => {
  // Load Boss
  const boss: HeaderData[] = [...VigilantGuardian];

  // Fetch players - MOCK atm
  const [players, setPlayers] = useState<Player[]>([]);
  useEffect(() => {
    const fetchPlayers = async () => {
      const fetchedPlayers: Player[] = await getPlayers(2);
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
        <Col xs={12} sm={10}>
          {players.length > 0 ? (
            <Table variant="dark" striped hover responsive>
              <TableHead headerItems={boss}/>
              <tbody>
                {players.map((_, index) => (
                  <TableRow
                    players={players}
                    key={players[index].id}
                    index={index}
                    setPlayers={setPlayers}></TableRow>
                ))}
              </tbody>
            </Table>
          ) : (
            <img src={Spinner} alt="Loading..."></img>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export { BossPage };
