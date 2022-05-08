import React from "react";
import styled from "styled-components";
import DefaultButton from "../components/DefaultButton";
import RosterBackgroundImage from "../assets/images/Roster.jpg";
import UpgradesBackgroundImage from "../assets/images/UpgradesCopy.jpg";
import ImageTitle from "../components/ImageTitle";
type Props = {};
const LandingPage: React.FC<Props> = () => {
  return (
    <>
      <Wrapper>
        <Section direction="row">
          <DefaultButton>Login</DefaultButton>
          <DefaultButton>Register</DefaultButton>
        </Section>
        <Section direction="column">
          <Title>Do You Need</Title>
          <p>Raid Managment Tool</p>
        </Section>
        <Section direction="column">
          <ImageTitle image={RosterBackgroundImage}>
            <h2>Manage Your Roster</h2>
          </ImageTitle>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            ratione aperiam perspiciatis placeat quidem natus ex quas quae
            reiciendis dicta illo distinctio, odio nesciunt sit nihil itaque
            nisi ullam. Quam rem distinctio, non dolores dolor cum recusandae
            sit ratione! Vero blanditiis, voluptatibus dolorem eveniet molestias
            nam alias reprehenderit, nemo sapiente consequuntur voluptas
            doloremque
          </p>
        </Section>
        <Section direction="column">
          <ImageTitle image={UpgradesBackgroundImage}>
            <h2>Track Upgrades</h2>
          </ImageTitle>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            expedita eveniet beatae minima minus eaque quam fuga dolorem cum
            dignissimos. Tenetur quasi aliquam aspernatur aliquid possimus
            laborum quaerat a inventore eveniet, ipsum aperiam! Voluptatem ullam
            minus sunt recusandae, sint blanditiis eius dolorum optio soluta
            necessitatibus vero, praesentium aperiam laboriosam ipsa. Amet rerum
            necessitatibus culpa quisquam soluta possimus harum nesciunt modi
            nulla tempore quis optio ratione nostrum id libero omnis porro nisi
            unde ad, incidunt consequuntur ipsam. Reprehenderit nobis pariatur
            maxime nam minus cupiditate, soluta voluptatibus laborum, in rerum
            vitae ullam consequuntur tempore suscipit quas, repellendus quia
            dolores saepe expedita tenetur!
          </p>
        </Section>
      </Wrapper>
    </>
  );
};

export default LandingPage;

type SectionType = {
  direction: string;
};
const Section = styled.section<SectionType>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  justify-content: center;
  gap: 5%;
  width: 62%;
  margin-top: 5vh;
`;
const Title = styled.p`
  margin: 0;
  font-size: 3.5rem;
  font-family: var(--primaryFamily);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #c4c4c4;
`;
