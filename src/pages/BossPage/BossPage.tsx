import React from "react";
import { DesktopHeader } from "../../components/DesktopHeader";
import { Table } from "../../components/Table";
import { BossData } from "../../models/BossData";
import { Player } from "../../models/Player";
import { BodyWrapper } from "./bodyWrapper";
import { PageWrapper } from "./pageWrapper";

const BossPage: React.FC = () => {
  // Mock boss data
  const bossData: BossData = {
    twoHand: true,
    gloves: true,
    legs: true,
    shield: true,
    trinket: true,
    feet: true,
  };
  const playerData: Player[] = [
    {
      tableData: {
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
      selected: true,
    },
    {
      tableData: {
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
      selected: true,
    },
    {
      tableData: {
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
      selected: false,
    },
    {
      tableData: {
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
      selected: false,
    },
  ];

  return (
    <PageWrapper>
      <DesktopHeader></DesktopHeader>
      <BodyWrapper>
        <Table bossData={bossData} playerData={playerData}></Table>
        <div>test</div>
      </BodyWrapper>
    </PageWrapper>
  );
};

export { BossPage };
