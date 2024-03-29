import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../customHooks/useAppSelector";
import { capitalizeFirstLetter } from "../../../../utils/capitalizeFirstLetter";

interface GuildRegisteredProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export const GuildRegistered: React.FC<GuildRegisteredProps> = ({
  setStep,
}) => {
  const guild = useAppSelector((state) => state.guildReducer);
  const guildAndServer = `${capitalizeFirstLetter(
    guild.name
  )} - ${capitalizeFirstLetter(guild.realm)}`;

  const redirect = useNavigate();

  useEffect(() => {
    setStep(4);
  }, []);

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
