import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DesktopHeader } from "../../components/DesktopHeader";
import { TableComponent } from "./TableComponent";
import { PlayerInput } from "./PlayerInput";
import { RosterList } from "./RosterList";
import { DropdownComponent } from "../../components/DropdownComponent/DropdownComponent";
import { useFetchCharacters } from "../../customHooks/useFetchCharacters";

const BossPage: React.FC = () => {
  const [toggleRender, setToggleRender] = useState(false);
  // Fetches characters from the API and updates the roster state
  useFetchCharacters();

  return (
    <Container fluid>
      <DesktopHeader />
      <Row className="mt-5 mb-2">
        <DropdownComponent title="Filter" options={["Test", "OneMore"]} />
      </Row>
      <Row>
        <Col xs={12} md={8} lg={5} xxl={3}>
          <PlayerInput setToggleRender={setToggleRender}></PlayerInput>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={10} className="text-center">
          <TableComponent />
        </Col>
        <Col>
          <RosterList />
        </Col>
      </Row>
    </Container>
  );
};

export { BossPage };
