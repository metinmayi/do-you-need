import React from "react";
import { Col, Container, Table, Row } from "react-bootstrap";
import { DesktopHeader } from "../../components/DesktopHeader";
import { MobileHeader } from "../../components/MobileHeader";
import { BossData } from "../../models/BossData";
import { DefaultBossData } from "../../models/DefaultBossData";
import { Player } from "../../models/Player";
import { TableData } from "../../models/TableData";
import { useMediaQuery } from "../../customHooks/customHooks";
import { capitalizeFirstLetter } from "../../utils/utils";
import PlayerRow from "./PlayerRow/PlayerRow";
import { RosterList } from "./RosterList";

const BossPage: React.FC = () => {
  // Mock boss data
  const defaultData: DefaultBossData[] = ["selected", "name", "role"];
  const bossData: BossData[] = [
    "twoHand",
    "gloves",
    "legs",
    "shield",
    "trinket",
    "feet",
    "upgradeCount",
  ];
  const tableData: (TableData | BossData)[] = [...defaultData, ...bossData];

  const playerData: Player[] = [
    {
      tableData: {
        selected: true,
        name: "Maestro",
        role: "tank",
        twoHand: "3.6%,200",
        gloves: "0",
        legs: "1%,100",
        shield: "0",
        trinket: "8%, 340",
        feet: "0",
        upgradeCount: "3/6",
      },
      class: "warrior",
      classColor: "#C69B6D",
    },
    {
      tableData: {
        selected: true,
        name: "Maestro",
        role: "dps",
        twoHand: "3.6%,200",
        gloves: "0",
        legs: "1%,100",
        shield: "0",
        trinket: "8%, 340",
        feet: "0",
        upgradeCount: "3/6",
      },
      class: "demon hunter",
      classColor: "#A330C9",
    },
    {
      tableData: {
        selected: false,
        name: "Maestro",
        role: "healer",
        twoHand: "3.6%,200",
        gloves: "0",
        legs: "1%,100",
        shield: "0",
        trinket: "8%, 340",
        feet: "0",
        upgradeCount: "3/6",
      },
      class: "druid",
      classColor: "#FF7C0A",
    },
    {
      tableData: {
        selected: false,
        name: "Dennis",
        role: "dps",
        twoHand: "3.6%,200",
        gloves: "0",
        legs: "1%,100",
        shield: "0",
        trinket: "8%, 340",
        feet: "0",
        upgradeCount: "3/6",
      },
      class: "hunter",
      classColor: "#AAD372",
    },
  ];

  const isMobile = useMediaQuery(900);
  return (
    <Container fluid>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      <Row>
        <Col xs={12} xl={7}>
          <Table variant="dark" striped hover responsive>
            <thead>
              <tr>
                {tableData.map((item) => (
                  <td key={item}>{capitalizeFirstLetter(item)}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {playerData.map((player) => (
                <PlayerRow
                  key={player.tableData.name + player.class}
                  player={player}></PlayerRow>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col>
          <RosterList />
        </Col>
      </Row>
    </Container>
  );
};

export { BossPage };
