import React from "react";
import { Button } from "../../components/Button";
import RosterBackgroundImage from "../../assets/images/Roster.jpg";
import UpgradesBackgroundImage from "../../assets/images/Upgrades.jpg";
import { ImageTitle } from "./ImageTitle";
import { Section } from "./section";
import { IndexWrapper } from "./indexWrapper";
import { Title } from "./title";

const LandingPage: React.FC = () => {
  return (
    <IndexWrapper>
      <Section direction="row">
        <Button url="/login">Login</Button>
        <Button url="/register">Register</Button>
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
          reiciendis dicta illo distinctio, odio nesciunt sit nihil itaque nisi
          ullam. Quam rem distinctio, non dolores dolor cum recusandae sit
          ratione! Vero blanditiis, voluptatibus dolorem eveniet molestias nam
          alias reprehenderit, nemo sapiente consequuntur voluptas doloremque
        </p>
      </Section>
      <Section direction="column">
        <ImageTitle image={UpgradesBackgroundImage}>
          <h2>Track Upgrades</h2>
        </ImageTitle>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          expedita eveniet beatae minima minus eaque quam fuga dolorem cum
          dignissimos. Tenetur quasi aliquam aspernatur aliquid possimus laborum
          quaerat a inventore eveniet, ipsum aperiam! Voluptatem ullam minus
          sunt recusandae, sint blanditiis eius dolorum optio soluta
          necessitatibus vero, praesentium aperiam laboriosam ipsa. Amet rerum
          necessitatibus culpa quisquam soluta possimus harum nesciunt modi
          nulla tempore quis optio ratione nostrum id libero omnis porro nisi
          unde ad, incidunt consequuntur ipsam. Reprehenderit nobis pariatur
          maxime nam minus cupiditate, soluta voluptatibus laborum, in rerum
          vitae ullam consequuntur tempore suscipit quas, repellendus quia
          dolores saepe expedita tenetur!
        </p>
      </Section>
    </IndexWrapper>
  );
};

export { LandingPage };
