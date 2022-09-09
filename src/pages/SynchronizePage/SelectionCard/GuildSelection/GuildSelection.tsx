import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { getGuild } from "../../../../api/blizzard.ts/getGuild";
import { IGuild, isIGuild } from "../../../../models/IGuild";
import { RetrievedCharacter } from "../../../../models/RetrievedCharacter";
import { LoadingSpinner } from "../../../../components/LoadingSpinner/LoadingSpinner";
import { INewGuild, IsNewGuild } from "../../../../models/INewGuild";
import { GuildRegistration } from "./GuildRegistration/GuildRegistration";

interface props {
  character: RetrievedCharacter;
  setCharacter: React.Dispatch<
    React.SetStateAction<RetrievedCharacter | undefined>
  >;
}
export const GuildSelection: React.FC<props> = ({
  character,
  setCharacter,
}) => {
  const [loading, setLoading] = useState(true);
  const [guild, setGuild] = useState<IGuild>();
  const [newGuild, setNewGuild] = useState<INewGuild>();
  const [error, setError] = useState("");

  useEffect(() => {
    async function updateGuild() {
      const result = await getGuild(character.name, character.realm);
      setLoading(false);

      if (!result || result.error) {
        setError(result?.errorMessage || "An error has occured");
        return;
      }

      if (isIGuild(result.data)) {
        setGuild(result.data);
      }

      if (IsNewGuild(result.data)) {
        setNewGuild(result.data);
      }
    }
    updateGuild();
  }, [newGuild]);

  return (
    <>
      {loading && <LoadingSpinner text="Looking for your guild..." />}
      {guild && (
        <Card bg="secondary">
          <Card.Header as="h5">{`${guild.name} - ${guild.realm}`}</Card.Header>
          <Card.Body>abc</Card.Body>
        </Card>
      )}
      {newGuild && (
        <GuildRegistration
          character={character}
          setCharacter={setCharacter}
          newGuild={newGuild}
          setNewGuild={setNewGuild}
        />
      )}
    </>
  );
};
