import React from "react";
import Logo from "../../assets/images/Lootbag.png";
import { Button, Col, Row } from "react-bootstrap";
import { DropdownComponent } from "../DropdownComponent/DropdownComponent";
import { useAppDispatch } from "../../customHooks/useAppDispatch";
import { setSelectedBoss } from "../../store/features/selectedBoss/selectedBossSlice";
import { BOSSES, isBossName } from "../../models/bosses/bosses";
import { getGuildCharacters } from "../../api/doYouNeed/getGuildCharacters";
import { setRoster } from "../../store/features/roster/rosterSlice";
import { useAppSelector } from "../../customHooks/useAppSelector";
import { convertToServerName } from "../../utils/convertToServerName";
import { convertToDYNName } from "../../utils/convertToDYNName";
import { useLogout } from "../../api/authentication/useLogout";

const DesktopHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentBoss = useAppSelector(
    (state) => state.selectedBossReducer.bossName
  );
  const guild = useAppSelector((state) => state.guildReducer);
  const logout = useLogout();

  // Changes the active boss. Updating the header name and the roster
  async function changeActiveBoss(e: React.MouseEvent<HTMLAnchorElement>) {
    const newName = convertToServerName(e.currentTarget.innerText);
    const characters = await getGuildCharacters(
      guild.blizzard_guild_id,
      newName
    );
    if (isBossName(newName)) {
      dispatch(setSelectedBoss(newName));
      dispatch(setRoster(characters));
    }
  }

  return (
    <Row className="d-flex p-1">
      <Col xs={1}>
        <img src={Logo} alt="Not found" style={{ width: "100%" }} />
      </Col>
      <Col className="d-flex justify-content-center align-items-center flex-grow-1">
        <h1> {convertToDYNName(currentBoss)} </h1>
      </Col>
      <Col className="d-flex justify-content-end align-items-center gap-1 flex-grow-0">
        <DropdownComponent
          title="Bosses"
          variant="success"
          options={[...BOSSES]}
          size="lg"
          onClick={changeActiveBoss}
        />
        <Button variant="danger" size="lg" onClick={logout}>
          Logout
        </Button>
      </Col>
    </Row>
  );
};

export { DesktopHeader };
