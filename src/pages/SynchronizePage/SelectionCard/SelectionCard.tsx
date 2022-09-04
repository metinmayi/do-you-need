import { useState } from "react";
import { CharacterSelection } from "./CharacterSelection";

export const SelectionCard: React.FC = () => {
  const [character, setCharacter] = useState("");
  return (
    <>
      {!character && (
        <CharacterSelection setCharacter={setCharacter}></CharacterSelection>
      )}
    </>
  );
};
