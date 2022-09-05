import { useState } from "react";
import { RetrievedCharacter } from "../../../models/RetrievedCharacter";
import { CharacterSelection } from "./CharacterSelection";
import { GuildSelection } from "./GuildSelection/GuildSelection";

export const SelectionCard: React.FC = () => {
  const [character, setCharacter] = useState<RetrievedCharacter>();
  return (
    <>
      {character ? (
        <GuildSelection character={character}></GuildSelection>
      ) : (
        <CharacterSelection setCharacter={setCharacter}></CharacterSelection>
      )}
    </>
  );
};
