import React from "react";
import { Title } from "./title";
import { HeaderSection } from "./headerSection";
import { HeaderWrapper } from "./headerWrapper";
import Logo from "../../assets/images/Logo.png";
import { Button } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderSection>
        <img src={Logo} alt="" style={{ height: "10vh" }} />
        <p>Do You Need</p>
      </HeaderSection>
      <HeaderSection>
        <Title> Vigilant Guardian </Title>
      </HeaderSection>
      <HeaderSection>
        <Button>Flowchart </Button>
        <Button>Bosses</Button>
        <Button>Settings</Button>
        <Button>Logout</Button>
      </HeaderSection>
    </HeaderWrapper>
  );
};

export { Header };
