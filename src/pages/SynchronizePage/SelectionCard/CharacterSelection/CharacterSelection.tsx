import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { getCharacters } from "../../../../api/blizzard.ts/getCharacters";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import { RetrievedCharacter } from "../../../../models/RetrievedCharacter";

interface CharacterSelectionProps {
  setCharacter: React.Dispatch<
    React.SetStateAction<RetrievedCharacter | undefined>
  >;
}
export const CharacterSelection: React.FC<CharacterSelectionProps> = ({
  setCharacter,
}) => {
  const [characters, setCharacters] = useState<RetrievedCharacter[]>([]);

  const handleSetCharacter = (
    e: React.MouseEvent,
    selectedCharacter: RetrievedCharacter
  ) => {
    e.preventDefault();
    setCharacter(selectedCharacter);
  };

  useEffect(() => {
    async function getChars() {
      const result = await getCharacters();
      setCharacters(result);
    }
    setTimeout(() => {
      getChars();
    }, 2000);
  }, []);

  return (
    <>
      <Card bg="secondary">
        <Card.Header as="h5">
          Please choose which character to connect with
        </Card.Header>
        <Card.Body>
          {characters.length > 0 ? (
            <ul>
              {characters.map((character) => (
                <li
                  key={`${character.name}-${character.realm}`}
                  onClick={(e) => handleSetCharacter(e, character)}>
                  {character.name} - {character.realm}
                </li>
              ))}
            </ul>
          ) : (
            <LoadingSpinner text="Loading..." />
          )}
        </Card.Body>
      </Card>
    </>
  );
};
