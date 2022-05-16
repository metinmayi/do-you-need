import React from "react";
import { Button } from "../../components/Button";
import { HeaderWrapper } from "./headerWrapper";

type Props = {
  online: boolean;
};
const Header: React.FC<Props> = () => {
  return (
    <HeaderWrapper>
      <Button>Login</Button>
      <Button>Register</Button>
    </HeaderWrapper>
  );
};

export { Header };
