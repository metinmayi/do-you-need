import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { registerGuild } from "../../../../../api/blizzard/registerGuild";
import { useAppDispatch } from "../../../../../customHooks/customHooks";
import { INewGuild } from "../../../../../models/INewGuild";
import { RetrievedCharacter } from "../../../../../models/RetrievedCharacter";
import { setGuild } from "../../../../../store/features/guild/guildSlice";
import { capitalizeFirstLetter } from "../../../../../utils/utils";

interface RegisterGuildProps {
  setNewGuild: React.Dispatch<React.SetStateAction<INewGuild | undefined>>;
  newGuild: INewGuild;
  character: RetrievedCharacter;
  setCharacter: React.Dispatch<
    React.SetStateAction<RetrievedCharacter | undefined>
  >;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export const RegisterGuild: React.FC<RegisterGuildProps> = ({
  newGuild,
  setNewGuild,
  setCharacter,
  setStep,
  character,

  setLoading,
}) => {
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();

  function handleBack(e: React.MouseEvent) {
    e.preventDefault();
    setNewGuild(undefined);
    setCharacter(undefined);
    setStep(1);
  }

  async function handleActivate(e: React.MouseEvent) {
    e.preventDefault();
    setLoading(true);

    const result = await registerGuild(
      character.name,
      character.realm,
      newGuild
    );

    setLoading(false);

    if (result.error) {
      setError(result.errorMessage);
      return;
    }

    dispatch(
      setGuild({
        id: newGuild.id,
        playerRank: "0",
        realm: newGuild.realm,
        name: newGuild.name,
        faction: newGuild.faction,
        license: newGuild.license,
      })
    );
    setNewGuild(undefined);
    setStep(4);
  }

  return (
    <>
      <Card bg="secondary">
        <Card.Header as="h5" style={{ color: "var(--DYNColor)" }}>
          Guild Information
        </Card.Header>
        <Card.Body>
          {error ? (
            <h3>{error}</h3>
          ) : (
            <>
              <p style={{ fontWeight: "bold" }}>
                {`${newGuild.name} - ${capitalizeFirstLetter(
                  newGuild.realm
                )} is not registered.`}
              </p>
              <p>
                If you are the GM of the guild, please click "Register" to
                register your guild.
              </p>
            </>
          )}
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <Button variant="warning" onClick={(e) => handleBack(e)}>
            Back
          </Button>
          <Button variant="success" onClick={(e) => handleActivate(e)}>
            Register
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};
