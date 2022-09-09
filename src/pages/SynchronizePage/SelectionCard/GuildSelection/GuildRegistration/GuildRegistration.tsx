import React from "react";
import { Button, Card } from "react-bootstrap";
import { INewGuild } from "../../../../../models/INewGuild";
import { RetrievedCharacter } from "../../../../../models/RetrievedCharacter";
import { capitalizeFirstLetter } from "../../../../../utils/utils";

interface GuildRegistrationProps {
  setNewGuild: React.Dispatch<React.SetStateAction<INewGuild | undefined>>;
  newGuild: INewGuild;
  character: RetrievedCharacter;
  setCharacter: React.Dispatch<
    React.SetStateAction<RetrievedCharacter | undefined>
  >;
}
export const GuildRegistration: React.FC<GuildRegistrationProps> = ({
  setNewGuild,
  newGuild,
  character,
  setCharacter,
}) => {
  function handleBack(e: React.MouseEvent) {
    e.preventDefault();
    setNewGuild(undefined);
    setCharacter(undefined);
  }
  return (
    <Card bg="secondary">
      <Card.Header as="h5">{`${newGuild.name} - ${capitalizeFirstLetter(
        newGuild.realm
      )}`}</Card.Header>
      <Card.Body>
        <p style={{ fontWeight: "bold" }}>
          This guild does not have an active license
        </p>
        <p>DoYouNeed offers a 7-day test period, no credentials needed.</p>
        <p>
          If you are the GM of the guild, please click "Activate" to register
          your guild. If not, contact your GM
        </p>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <Button variant="warning" onClick={(e) => handleBack(e)}>
          Back
        </Button>
        <Button variant="success">Activate</Button>
      </Card.Footer>
    </Card>
  );
};
