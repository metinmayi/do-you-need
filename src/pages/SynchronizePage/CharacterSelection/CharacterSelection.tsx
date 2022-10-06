import { Card, Button } from "react-bootstrap";
import { RetrievedCharacter } from "../../../models/RetrievedCharacter";
import { StyledUl } from "./StyledUl";
import HordeLogo from "../../../assets/images/HordeLogo.webp";
import AllianceLogo from "../../../assets/images/AllianceLogo.webp";
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";

interface CharacterSelectionProps {
  characters: RetrievedCharacter[];
  setSelectedCharacter: React.Dispatch<
    React.SetStateAction<RetrievedCharacter | undefined>
  >;
}

export const CharacterSelection: React.FC<CharacterSelectionProps> = ({
  characters,
  setSelectedCharacter,
}) => {
  function setCharacterAndStep(character: RetrievedCharacter) {
    setSelectedCharacter(character);
  }

  function getLogo(character: RetrievedCharacter) {
    return character.faction === "HORDE" ? HordeLogo : AllianceLogo;
  }
  return (
    <>
      <Card bg="secondary">
        <Card.Header as="h4" style={{ color: "var(--DYNColor)" }}>
          Select Character
        </Card.Header>
        <Card.Body>
          <StyledUl>
            {characters.map((character) => (
              <li
                key={character.name + character.realm}
                onClick={() => setCharacterAndStep(character)}
                style={{ color: character.color }}
              >
                {`${character.name} - ${capitalizeFirstLetter(
                  character.realm
                )}`}
                <img
                  src={getLogo(character)}
                  alt={character.faction}
                  style={{ height: "1.5rem" }}
                ></img>
              </li>
            ))}
          </StyledUl>
          <Card.Footer className="d-flex justify-content-end">
            <Button variant="danger" size="sm">
              Logout
            </Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
};
