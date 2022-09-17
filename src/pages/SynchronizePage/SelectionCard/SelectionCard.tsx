import React, { useState } from "react";
import { RetrievedCharacter } from "../../../models/RetrievedCharacter";
import { CharacterSelection } from "./CharacterSelection";
import { GuildInformation } from "./GuildInformation/GuildInformation";

interface SelectionCardProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export const SelectionCard: React.FC<SelectionCardProps> = ({ setStep }) => {
  const [character, setCharacter] = useState<RetrievedCharacter>();
  return (
    <>
      {character ? (
        <GuildInformation
          character={character}
          setCharacter={setCharacter}
          setStep={setStep}
        />
      ) : (
        <CharacterSelection
          setCharacter={setCharacter}
          setStep={setStep}></CharacterSelection>
      )}
    </>
  );
};
