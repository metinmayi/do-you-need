import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../customHooks/customHooks";
import { capitalizeFirstLetter } from "../../../../utils/utils";

interface GuildRegisteredProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export const GuildRegistered: React.FC<GuildRegisteredProps> = ({
  setStep,
}) => {
  setStep(4);
  const guild = useAppSelector((state) => state.guildReducer);
  const guildAndServer = `${capitalizeFirstLetter(
    guild.name
  )} - ${capitalizeFirstLetter(guild.server)}`;

  const redirect = useNavigate();

  return (
    <>
      <Card bg="secondary">
        <Card.Header as="h5" style={{ color: "var(--DYNColor)" }}>
          Synchronization Complete
        </Card.Header>
        <Card.Body>
          <h5>{guildAndServer}</h5>
          <p>{`is now connected to your account`}</p>
        </Card.Body>
        <Card.Footer>
          <Button variant="success" onClick={() => redirect("/bossPage")}>
            Continue
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};
