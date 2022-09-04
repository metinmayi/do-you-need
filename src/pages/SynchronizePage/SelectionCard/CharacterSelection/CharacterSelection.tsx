import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { getCharacters } from "../../../../api/blizzard.ts/getCharacters";
import { RetrievedCharacter } from "../../../../models/RetrievedCharacter";

interface props {
  setCharacter: React.Dispatch<React.SetStateAction<string>>;
}
export const CharacterSelection: React.FC<props> = ({ setCharacter }) => {
  const [characters, setCharacters] = useState<RetrievedCharacter[]>([]);
  useEffect(() => {
    async function getChars() {
      const result = await getCharacters();
      setCharacters(result);
    }
    getChars();
  }, []);

  return (
    <>
      <Card bg="secondary">
        <Card.Header as="h5">
          Please choose which character to connect with
        </Card.Header>
        <Card.Body>
          {characters ? (
            <ul>
              {characters.map((character) => (
                <li key={`${character.name}-${character.realm}`}>
                  {character.name} - {character.realm}
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </Card.Body>
      </Card>
    </>
  );
};
