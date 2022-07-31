import React, { useState } from "react";
import Logo from "../../assets/images/Lootbag.png";
import { Button, Col, Row } from "react-bootstrap";
import { DropdownComponent } from "../DropdownComponent/DropdownComponent";
import { BOSSES, BOSSNAMES } from "../../models/Bosses";
import { isBossName } from "../../utils/utils";

const DesktopHeader: React.FC = () => {
  const [currentBoss, setCurrentBoss] = useState<BOSSNAMES>(BOSSES[0]);
  const changeActiveBoss = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const bossName = e.currentTarget.innerText;
    if (isBossName(bossName)) {
      setCurrentBoss(bossName);
    }
  };
  return (
    <Row className="d-flex p-1">
      <Col xs={1}>
        <img src={Logo} alt="Not found" style={{ width: "100%" }} />
      </Col>
      <Col className="d-flex justify-content-center align-items-center flex-grow-1">
        <h1> {currentBoss} </h1>
      </Col>
      <Col className="d-flex justify-content-end align-items-center gap-1">
        <DropdownComponent
          title="Bosses"
          variant="success"
          options={[...BOSSES]}
          size="lg"
          onClick={changeActiveBoss}
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

export { DesktopHeader };
