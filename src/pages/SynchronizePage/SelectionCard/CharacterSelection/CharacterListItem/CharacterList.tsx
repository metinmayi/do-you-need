import { RetrievedCharacter } from "../../../../../models/RetrievedCharacter";
import { capitalizeFirstLetter } from "../../../../../utils/utils";
import { StyledUl } from "./StyledUl";

interface CharacterListProps {
  characters: RetrievedCharacter[];
  setCharacter: React.Dispatch<
    React.SetStateAction<RetrievedCharacter | undefined>
  >;
}
export const CharacterList: React.FC<CharacterListProps> = ({
  characters,
  setCharacter,
}) => {
  return (
    <StyledUl>
      {characters.map((character) => (
        <li
          key={character.name + character.realm}
          onClick={() => setCharacter(character)}
          style={{ color: character.color, cursor: "pointer" }}>
          {`${character.name} - ${capitalizeFirstLetter(character.realm)}`}
        </li>
      ))}
    </StyledUl>
  );
};
