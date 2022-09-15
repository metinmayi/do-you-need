import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { activateGuild } from "../../../../../api/blizzard.ts/activateGuild";
import { LoadingSpinner } from "../../../../../components/LoadingSpinner";
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
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export const GuildRegistration: React.FC<GuildRegistrationProps> = ({
  setNewGuild,
  newGuild,
  character,
  setCharacter,
  setStep,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [goodRegistration, setGoodRegistration] = useState(false);

  function handleBack(e: React.MouseEvent) {
    e.preventDefault();
    setNewGuild(undefined);
    setCharacter(undefined);
    setStep(1);
  }

  async function handleActivate(e: React.MouseEvent) {
    e.preventDefault();
    setLoading(true);

    const result = await activateGuild(
      character.name,
      character.realm,
      newGuild.name
    );

    setLoading(false);

    if (result.error) {
      setError(result.errorMessage);
      return;
    }

    setGoodRegistration(true);
    setStep(3);
  }
  return (
    <>
      {goodRegistration ? (
        <p>abc</p>
      ) : (
        <Card bg="secondary">
          <Card.Header as="h5">{`${newGuild.name} - ${capitalizeFirstLetter(
            newGuild.realm
          )}`}</Card.Header>
          <Card.Body>
            {loading ? (
              <LoadingSpinner text="Validating your GM status..." />
            ) : error ? (
              <h3>{error}</h3>
            ) : (
              <>
                <p style={{ fontWeight: "bold" }}>
                  This guild does not have an active license
                </p>
                <p>
                  DoYouNeed offers a 7-day trial period,{" "}
                  <b>no credentials needed.</b>
                </p>
                <p>
                  If you are the GM of the guild, please click "Activate" to
                  register your guild. If not, contact your GM
                </p>
              </>
            )}
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">
            <Button variant="warning" onClick={(e) => handleBack(e)}>
              Back
            </Button>
            <Button variant="success" onClick={(e) => handleActivate(e)}>
              Activate
            </Button>
          </Card.Footer>
        </Card>
      )}
    </>
  );
};
