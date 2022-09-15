import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { getCharacters } from "../../../../api/blizzard.ts/getCharacters";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import { RetrievedCharacter } from "../../../../models/RetrievedCharacter";
import { CharacterList } from "./CharacterListItem";

interface CharacterSelectionProps {
  setCharacter: React.Dispatch<
    React.SetStateAction<RetrievedCharacter | undefined>
  >;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const CharacterSelection: React.FC<CharacterSelectionProps> = ({
  setCharacter,
  setStep,
}) => {
  const [characters, setCharacters] = useState<RetrievedCharacter[]>([]);

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
            <CharacterList
              characters={characters}
              setCharacter={setCharacter}
              setStep={setStep}
            />
          ) : (
            <LoadingSpinner text="Loading..." />
          )}
        </Card.Body>
      </Card>
    </>
  );
};
