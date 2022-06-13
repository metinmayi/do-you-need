
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import RosterBackgroundImage from "../../assets/images/Roster.jpg";
import UpgradesBackgroundImage from "../../assets/images/Upgrades.jpg";
import { ImageTitle } from "./ImageTitle";
import { Section } from "./section";
import { IndexWrapper } from "./indexWrapper";
import { Title } from "./title";
import { useRedirect } from "../../utils/utils";

const LandingPage: React.FC = () => {
  const redirect = useRedirect();
  return (
    <Container fluid className="d-grid gap-5">
      <Row className="justify-content-center mt-3">
        <Col xs={5} lg={3} className="d-flex gap-2">
        <Button className="flex-grow-1 border" variant="secondary" onClick={() => redirect('/login')}>Login</Button>
        <Button className="flex-grow-1 border" variant="secondary" onClick={() => redirect('/register')}>Register</Button>
        </Col>
      </Row>
      <Row className="text-center">
        <Title>Do You Need</Title>
        <p>Raid Managment Tool</p>
      </Row>
      <Row className="justify-content-center">
        <Col md={10} xl={7}>
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
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10} xl={7}>
          <ImageTitle image={RosterBackgroundImage}>
          <h2>Track Upgrades</h2>
          </ImageTitle>
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
          ratione aperiam perspiciatis placeat quidem natus ex quas quae
          reiciendis dicta illo distinctio, odio nesciunt sit nihil itaque nisi
          ullam. Quam rem distinctio, non dolores dolor cum recusandae sit
          ratione! Vero blanditiis, voluptatibus dolorem eveniet molestias nam
          alias reprehenderit, nemo sapiente consequuntur voluptas doloremque
          </p>
        </Col>
      </Row>
    </Container>

    // <IndexWrapper>
    //   </Section>
    //   <Section direction="column">


    //   </Section>
    //   <Section direction="column">
    //     <ImageTitle image={UpgradesBackgroundImage}>
    //       <h2>Track Upgrades</h2>
    //     </ImageTitle>
    //     <p>
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
    //       expedita eveniet beatae minima minus eaque quam fuga dolorem cum
    //       dignissimos. Tenetur quasi aliquam aspernatur aliquid possimus laborum
    //       quaerat a inventore eveniet, ipsum aperiam! Voluptatem ullam minus
    //       sunt recusandae, sint blanditiis eius dolorum optio soluta
    //       necessitatibus vero, praesentium aperiam laboriosam ipsa. Amet rerum
    //       necessitatibus culpa quisquam soluta possimus harum nesciunt modi
    //       nulla tempore quis optio ratione nostrum id libero omnis porro nisi
    //       unde ad, incidunt consequuntur ipsam. Reprehenderit nobis pariatur
    //       maxime nam minus cupiditate, soluta voluptatibus laborum, in rerum
    //       vitae ullam consequuntur tempore suscipit quas, repellendus quia
    //       dolores saepe expedita tenetur!
    //     </p>
    //   </Section>
    // </IndexWrapper>
  );
};

export { LandingPage };
