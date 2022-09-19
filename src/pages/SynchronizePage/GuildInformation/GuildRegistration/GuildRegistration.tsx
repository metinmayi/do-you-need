import React, { useState } from "react";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import { INewGuild } from "../../../../models/INewGuild";
import { RetrievedCharacter } from "../../../../models/RetrievedCharacter";
import { RegisterGuild } from "./RegisterGuild/RegisterGuild";

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

  return (
    <>
      {loading ? (
        <LoadingSpinner text="Searching for your guild..." />
      ) : (
        <RegisterGuild
          newGuild={newGuild}
          setNewGuild={setNewGuild}
          character={character}
          setCharacter={setCharacter}
          setStep={setStep}
          setLoading={setLoading}
        />
      )}
    </>
  );
};
