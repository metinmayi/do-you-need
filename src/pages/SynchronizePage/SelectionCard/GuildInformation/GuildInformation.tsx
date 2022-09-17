import { useEffect, useState } from "react";
import { getPlayersGuild } from "../../../../api/blizzard.ts/getPlayersGuild";
import { isIGuild } from "../../../../models/IGuild";
import { RetrievedCharacter } from "../../../../models/RetrievedCharacter";
import { LoadingSpinner } from "../../../../components/LoadingSpinner/LoadingSpinner";
import { INewGuild, IsNewGuild } from "../../../../models/INewGuild";
import { GuildRegistration } from "./GuildRegistration/GuildRegistration";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../customHooks/customHooks";
import { setGuild } from "../../../../store/features/guild/guildSlice";
import { getPlayerRank } from "../../../../api/blizzard.ts/getPlayerRank";
import { GuildExists } from "./GuildExists/GuildExists";

interface props {
  character: RetrievedCharacter;
  setCharacter: React.Dispatch<
    React.SetStateAction<RetrievedCharacter | undefined>
  >;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export const GuildInformation: React.FC<props> = ({
  character,
  setCharacter,
  setStep,
}) => {
  const [loading, setLoading] = useState(true);
  const [newGuild, setNewGuild] = useState<INewGuild>();
  const [error, setError] = useState("");
  const [guildExists, setGuildExists] = useState(false);

  const redirect = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function updateGuild() {
      const result = await getPlayersGuild(character.name, character.realm);

      if (!result || result.error) {
        setError(result?.errorMessage || "An error has occured");
        setLoading(false);
        return;
      }
      if (IsNewGuild(result.data)) {
        setNewGuild(result.data);
        setLoading(false);
      }

      if (isIGuild(result.data)) {
        const rank = await getPlayerRank(
          result.data.name,
          result.data.realm,
          character.name
        );

        dispatch(setGuild({ guildID: result.data.id.toString(), rank }));

        setLoading(false);

        redirect("/bossPage");
      }
    }
    updateGuild();
  }, []);

  return (
    <>
      {loading && <LoadingSpinner text="Looking for your guild..." />}
      {newGuild && (
        <GuildRegistration
          character={character}
          setCharacter={setCharacter}
          newGuild={newGuild}
          setNewGuild={setNewGuild}
          setStep={setStep}
        />
      )}
      {guildExists && <GuildExists />}
      {error && <p>{error}</p>}
    </>
  );
};
