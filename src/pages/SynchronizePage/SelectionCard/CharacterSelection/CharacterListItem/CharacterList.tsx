import React from "react";
import { RetrievedCharacter } from "../../../../../models/RetrievedCharacter";
import { capitalizeFirstLetter } from "../../../../../utils/utils";
import { StyledUl } from "./StyledUl";
import HordeLogo from "../../../../../assets/images/Horde Logo.webp";
import AllianceLogo from "../../../../../assets/images/AllianceLogo.webp";

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

  function getLogo(character: RetrievedCharacter) {
    return character.faction === "HORDE" ? HordeLogo : AllianceLogo;
  }
  return (
    <StyledUl>
      {characters.map((character) => (
        <li
          key={character.name + character.realm}
          onClick={() => setCharacterAndStep(character)}
          style={{ color: character.color }}>
          {`${character.name} - ${capitalizeFirstLetter(character.realm)}`}
          <img
            src={getLogo(character)}
            alt={character.faction}
            style={{ height: "1.5rem" }}></img>
        </li>
      ))}
    </StyledUl>
  );
};
