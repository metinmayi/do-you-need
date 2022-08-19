import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { GET_CHARS_URL } from '../../../config/config';

export const CharactersCard: React.FC = () => {
  const [characters, setCharacters] = useState<charAndGuild[]>([]);
  useEffect(() => {
    async function getChars() {
      const characters = await fetch(GET_CHARS_URL, { credentials: 'include' });
      const data = await characters.json();
      console.log(data);
      if (isCharAndGuild(data)) {
        setCharacters(data);
      }
    }
    getChars();
  }, []);
  return (
    <Card bg="secondary">
      <Card.Header as="h3">Characters</Card.Header>
      <Card.Body>
        {characters ? (
          <ul>
            {characters.map((character) => (
              <li>
                {character.name} - {character.realm}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </Card.Body>
    </Card>
  );
};

type charAndGuild = {
  name: string;
  realm: string;
  classId: number;
};

function isCharAndGuild(response: any): response is charAndGuild[] {
  return true;
}
