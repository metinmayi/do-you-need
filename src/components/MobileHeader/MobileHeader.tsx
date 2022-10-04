import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Logo from "../../assets/images/Lootbag.png";
import { DropdownComponent } from "../DropdownComponent/DropdownComponent";
import { isBossName } from "../../utils/utils";
import { BOSSES, BOSSNAMES } from "../../models/bosses/bosses";

const MobileHeader: React.FC = () => {
  const [currentBoss, setCurrentBoss] = useState<BOSSNAMES>(BOSSES[0]);
  const changeActiveBoss = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const bossName = e.currentTarget.innerText;
    if (isBossName(bossName)) {
      setCurrentBoss(bossName);
    }
  };
  return (
    <Row className="d-flex p-1">
      <Col
        xs={4}
        sm={3}
        className="d-flex align-items-center justify-content-end"
      >
        <img src={Logo} alt="Not found" style={{ width: "90%" }} />
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        <h1> {currentBoss}</h1>
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
