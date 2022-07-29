import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DesktopHeader } from "../../components/DesktopHeader";
import { MobileHeader } from "../../components/MobileHeader";
import { useAppDispatch, useMediaQuery } from "../../customHooks/customHooks";
import { IPlayer } from "../../models/Player";
import { getPlayers } from "../../api/players";
import { TableComponent } from "./TableComponent";
import { PlayerInput } from "./PlayerInput";
import { DropdownComponent } from "./DropdownComponent/DropdownComponent";
import { RosterList } from "./RosterList";
import { setList } from "../../store/features/roster/rosterSlice";


const BossPage: React.FC = () => {
  // Initiated the players state.
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchPlayers = async () => {
      const fetchedPlayers: IPlayer[] = await getPlayers();
      dispatch(setList(fetchedPlayers));
    };
    fetchPlayers();
  }, []);

  // Checks if mobile
  const isMobile = useMediaQuery(900);

  return (
    <Container fluid>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      <Row className="mt-5 mb-2">
        <DropdownComponent />
      </Row>
      <Row>
        <Col xs={12} md={8} lg={5} xxl={3}>
          <PlayerInput></PlayerInput>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={10} className="text-center">
          <TableComponent/>
        </Col>
        <Col>
          <RosterList/>
        </Col>
      </Row>
    </Container>
  );
};

export { BossPage };
