import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Title } from "../DesktopHeader/title";
import Logo from "../../assets/images/Lootbag.png";
import { DropdownComponent } from "../DropdownComponent/DropdownComponent";
import { BOSSES, BOSSNAMES } from "../../models/Bosses";
import { isBossName } from "../../utils/utils";

const MobileHeader: React.FC = () => {
  const [currentBoss, setCurrentBoss] = useState<BOSSNAMES>(BOSSES[0]);
  const changeActiveBoss = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const bossName = e.currentTarget.innerText;
    if (isBossName(bossName)) {
      setCurrentBoss(bossName);
    }
  };
  return (
    <Row className="d-flex justify-content-center p-1">
      <Col
        xs={4}
        sm={3}
        className="d-flex align-items-center justify-content-end">
        <img src={Logo} alt="Not found" style={{ width: "90%" }} />
      </Col>
      <Col className="d-flex justify-content-end">
        <Title> {currentBoss}</Title>
      </Col>
      <Col className="d-flex justify-content-end align-items-center gap-1">
        <DropdownComponent
          title="Bosses"
          options={[...BOSSES]}
          size="lg"
          onClick={changeActiveBoss}
          variant="success"
        />
        <Button variant="warning" size="lg">
          Settings
        </Button>
        <Button variant="danger" size="lg">
          Logout
        </Button>
      </Col>
    </Row>
  );
};

export { MobileHeader };
