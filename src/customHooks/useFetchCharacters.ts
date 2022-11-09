import { useEffect } from "react";
import { getGuildCharacters } from "../api/doYouNeed/getGuildCharacters";
import { ICharacterUpgrade } from "../models/ICharacterUpgrades";
import { setIsLoading, setRoster } from "../store/features/roster/rosterSlice";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

/**
 * Custom hook that retrieves characters from the API and sets them as the updated roster.
 */
export function useFetchCharacters(toggleRender: boolean) {
  const dispatch = useAppDispatch();
  const guild = useAppSelector((state) => state.guildReducer);
  const bossName = useAppSelector(
    (state) => state.selectedBossReducer.bossName
  );
  useEffect(() => {
    dispatch(setIsLoading(true));
    const fetchCharacters = async () => {
      const fetchedCharacters: ICharacterUpgrade[] = await getGuildCharacters(
        guild.blizzard_guild_id,
        bossName
      );
      dispatch(setRoster(fetchedCharacters));
      dispatch(setIsLoading(false));
    };
    fetchCharacters();
  }, [toggleRender]);
}
