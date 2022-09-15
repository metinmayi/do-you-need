import React from "react";
import { RetrievedCharacter } from "../../../../../models/RetrievedCharacter";
import { capitalizeFirstLetter } from "../../../../../utils/utils";
import { StyledUl } from "./StyledUl";

interface CharacterListProps {
  characters: RetrievedCharacter[];
  setCharacter: React.Dispatch<
    React.SetStateAction<RetrievedCharacter | undefined>
  >;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export const CharacterList: React.FC<CharacterListProps> = ({
  characters,
  setCharacter,
  setStep,
}) => {
  function setCharacterAndStep(character: RetrievedCharacter) {
    setCharacter(character);
    setStep(2);
  }
  return (
    <StyledUl>
      {characters.map((character) => (
        <li
          key={character.name + character.realm}
          onClick={() => setCharacterAndStep(character)}
          style={{ color: character.color, cursor: "pointer" }}>
          {`${character.name} - ${capitalizeFirstLetter(character.realm)}`}
        </li>
      ))}
    </StyledUl>
  );
};
