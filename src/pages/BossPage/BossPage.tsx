import React from "react";
import { Col, Container, Table, Row } from "react-bootstrap";
import { DesktopHeader } from "../../components/DesktopHeader";
import { MobileHeader } from "../../components/MobileHeader";
import { useMediaQuery } from "../../customHooks/customHooks";
import { VigilantGuardian } from "../../models/Bosses";
import { TableHead } from "./TableHead";
import { HeaderData } from "../../models/HeaderData";
import { TableBody } from "./TableBody";

const BossPage: React.FC = () => {
  // Load Boss
  const boss: HeaderData[] = [...VigilantGuardian];

  // Checks if mobile
  const isMobile = useMediaQuery(900);

  return (
    <Container fluid>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      <Row>
        <Col xs={12} sm={10}>
            <Table variant="dark" striped hover responsive>
              <TableHead headerItems={boss}/>
              <TableBody/>
            </Table>
        </Col>
      </Row>
    </Container>
  );
};

export { BossPage };
