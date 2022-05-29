import React from "react";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { BossData } from "../../models/BossData";
import { BodyWrapper } from "./bodyWrapper";
import { PageWrapper } from "./pageWrapper";

const BossPage: React.FC = () => {
  // Mock boss data
  const bossData: BossData = {
    bossItems: {
      twoHand: true,
      gloves: true,
      legs: true,
      shield: true,
      trinket: true,
      feet: true,
    },
    players: [
      {
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
      {
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
      {
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
      {
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
    ],
  };
  return (
    <PageWrapper>
      <Header></Header>

      <BodyWrapper>
        <Table data={bossData}></Table>
        <div>test</div>
      </BodyWrapper>
    </PageWrapper>
  );
};

export { BossPage };
