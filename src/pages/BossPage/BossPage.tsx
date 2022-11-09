import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DesktopHeader } from "../../components/DesktopHeader";
import { TableComponent } from "./TableComponent";
import { useFetchCharacters } from "../../customHooks/useFetchCharacters";
import { CharacterInput } from "./CharacterInput/CharacterInput";
import { AccordionComponent } from "../../components/AccordionComponent/AccordionComponent";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../customHooks/useAppSelector";

const BossPage: React.FC = () => {
  const redirect = useNavigate();
  const guild = useAppSelector((state) => state.guildReducer);
  const [toggleRender, setToggleRender] = useState(false);

  // Check if user has a guild
  useEffect(() => {
    if (!guild.name) {
      redirect("/synchronize");
    }
  }, []);

  // Fetches characters from the API and updates the roster state
  useFetchCharacters(toggleRender);

  return (
    <Container>
      <DesktopHeader />
      <Row className="mt-5 mb-2">
        <Col xs={2}>
          <AccordionComponent header="Filter" />
        </Col>
      </Row>
      <Row className="d-flex justify-content-between">
        <Col xs={12} md={8} lg={5} xxl={3}>
          <CharacterInput setToggleRender={setToggleRender}></CharacterInput>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <TableComponent />
      </Row>
    </Container>
  );
};

export { BossPage };
