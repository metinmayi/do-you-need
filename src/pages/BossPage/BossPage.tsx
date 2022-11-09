import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DesktopHeader } from "../../components/DesktopHeader";
import { TableComponent } from "./TableComponent";
import { DropdownComponent } from "../../components/DropdownComponent/DropdownComponent";
import { useFetchCharacters } from "../../customHooks/useFetchCharacters";
import { CharacterInput } from "./CharacterInput/CharacterInput";

const BossPage: React.FC = () => {
  const [toggleRender, setToggleRender] = useState(false);
  // Fetches characters from the API and updates the roster state
  useFetchCharacters(toggleRender);

  return (
    <Container>
      <DesktopHeader />
      <Row className="mt-5 mb-2">
        <DropdownComponent title="Filter" options={["Test", "OneMore"]} />
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
