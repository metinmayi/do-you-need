import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import RosterBackgroundImage from "../../assets/images/Roster.jpg";
import UpgradesBackgroundImage from "../../assets/images/Upgrades.jpg";
import { ImageTitle } from "./ImageTitle";
import { Title } from "./title";
import { hasVisitedBefore, useRedirect } from "../../utils/utils";
import { ModalComponent } from "../../components/ModalComponent";
import { LandingPageModal } from "./LandingPageModal";

const LandingPage: React.FC = () => {
  const redirect = useRedirect();
  const [hasVisited, setHasVisited] = useState(hasVisitedBefore());
  const toggleModal = () => {
    setHasVisited(!hasVisited);
    localStorage.setItem("hasVisited", "yes");
  };
  return (
    <Container fluid className="d-grid gap-5">
      {!hasVisited && (
        <ModalComponent
          Component={LandingPageModal}
          title="Demo"
          handleClick={toggleModal}></ModalComponent>
      )}
      <Row className="mt-2 justify-content-end">
        <Col xs={7} lg={3} className="d-flex gap-2">
          <Button
            className="flex-grow-1 border"
            variant="secondary"
            onClick={() => redirect("/login")}>
            Login
          </Button>
          <Button
            className="flex-grow-1 border"
            variant="secondary"
            onClick={() => redirect("/register")}>
            Register
          </Button>
        </Col>
      </Row>
      <Row className="text-center">
        <Title className="mb-5">Do You Need</Title>
      </Row>
      <Row className="justify-content-center">
        <Col md={10} xl={7}>
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
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10} xl={7}>
          <ImageTitle image={UpgradesBackgroundImage}>
            <h2>Track Upgrades</h2>
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
        </Col>
      </Row>
    </Container>
  );
};

export { LandingPage };
