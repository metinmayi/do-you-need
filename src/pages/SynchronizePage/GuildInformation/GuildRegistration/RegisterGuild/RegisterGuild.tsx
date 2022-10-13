import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { registerGuild } from "../../../../../api/blizzard/registerGuild";
import { useAppDispatch } from "../../../../../customHooks/useAppDispatch";
import { INewGuild } from "../../../../../models/INewGuild";
import { RetrievedCharacter } from "../../../../../models/RetrievedCharacter";
import { setGuild } from "../../../../../store/features/guild/guildSlice";
import HordeLogo from "../../../../../assets/images/HordeLogo.webp";
import AllianceLogo from "../../../../../assets/images/AllianceLogo.webp";
import { capitalizeFirstLetter } from "../../../../../utils/capitalizeFirstLetter";

interface RegisterGuildProps {
  setNewGuild: React.Dispatch<React.SetStateAction<INewGuild | undefined>>;
  newGuild: INewGuild;
  character: RetrievedCharacter;
  setCharacter: React.Dispatch<
    React.SetStateAction<RetrievedCharacter | undefined>
  >;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}
export const RegisterGuild: React.FC<RegisterGuildProps> = ({
  newGuild,
  setNewGuild,
  setCharacter,
  setStep,
  character,
  setLoading,
  error,
  setError,
}) => {
  const dispatch = useAppDispatch();
  const factionLogo = newGuild.faction === "HORDE" ? HordeLogo : AllianceLogo;

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

    if (result.status !== 200) {
      setError(
        result.status === 401
          ? "The selected character is not the GM"
          : "An unexpected error occured"
      );
      return;
    }

    dispatch(
      setGuild({
        blizzard_id: newGuild.blizzard_id,
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
        <Card.Header
          as="h5"
          className="d-flex justify-content-between"
          style={{ color: "var(--DYNColor)" }}
        >
          <span>Guild Information</span>
          <img src={factionLogo} style={{ width: "5%" }} />
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
          {!error && (
            <Button variant="success" onClick={(e) => handleActivate(e)}>
              Register
            </Button>
          )}
        </Card.Footer>
      </Card>
    </>
  );
};
