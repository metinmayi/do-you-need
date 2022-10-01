import React, { useEffect, useState } from "react";
import { getCharactersGuild } from "../../../api/blizzard/getCharactersGuild";
import { isIGuild } from "../../../models/IGuild";
import { RetrievedCharacter } from "../../../models/RetrievedCharacter";
import { INewGuild, IsNewGuild } from "../../../models/INewGuild";
import { GuildRegistration } from "./GuildRegistration/GuildRegistration";
import { useAppDispatch } from "../../../customHooks/customHooks";
import { setGuild } from "../../../store/features/guild/guildSlice";
import { getPlayerRank } from "../../../api/blizzard/getPlayerRank";
import { GuildRegistered } from "./GuildRegistered";
import { LoadingSpinner } from "../../../components/LoadingSpinner";
import { addGuildToUser } from "../../../api/doYouNeed/addGuildToUser";
import { IUserGuild } from "../../../models/IUserGuild";

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
  const [newGuild, setNewGuild] = useState<INewGuild>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    setStep(2);
    async function updateGuild() {
      const result = await getCharactersGuild(character.name, character.realm);

      if (!result || result.error) {
        setError(result?.errorMessage || "An error has occured");
        setIsLoading(false);
        return;
      }

      if (IsNewGuild(result.data)) {
        result.data.id = result.data.id.toString();
        setNewGuild(result.data);
        setIsLoading(false);
        return;
      }

      if (isIGuild(result.data)) {
        const rank = await getPlayerRank(
          result.data.name,
          result.data.realm,
          character.name
        );

        const guild: IUserGuild = {
          id: result.data.id.toString(),
          playerRank: rank.toString(),
          realm: result.data.realm,
          name: result.data.name,
          license: result.data.license,
          faction: result.data.faction,
          characters: result.data.characters,
        };

        const addMessage = await addGuildToUser(guild);
        dispatch(setGuild(guild));

        if (addMessage) {
          setError(addMessage);
        }

        setIsLoading(false);
      }
    }
    updateGuild();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner text="loading..." />
      ) : error ? (
        <p>{error}</p>
      ) : newGuild ? (
        <GuildRegistration
          character={character}
          setCharacter={setCharacter}
          newGuild={newGuild}
          setNewGuild={setNewGuild}
          setStep={setStep}
        />
      ) : (
        <GuildRegistered setStep={setStep} />
      )}
    </>
  );
};
