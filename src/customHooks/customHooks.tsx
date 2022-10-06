import { useEffect } from "react";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { getGuildCharacters } from "../api/doYouNeed/getGuildCharacters";
import { ICharacterUpgrade } from "../models/ICharacterUpgrades";
import { setRoster } from "../store/features/roster/rosterSlice";
import { AppDispatch, RootState } from "../store/store";

/**
 * Custom hook that retrieves characters from the API and sets them as the updated roster.
 */
export function useFetchCharacters() {
  const dispatch = useAppDispatch();
  const guild = useAppSelector((state) => state.guildReducer);
  const bossName = useAppSelector(
    (state) => state.selectedBossReducer.bossName
  );
  useEffect(() => {
    const fetchCharacters = async () => {
      const fetchedCharacters: ICharacterUpgrade[] = await getGuildCharacters(
        guild,
        bossName
      );
      dispatch(setRoster(fetchedCharacters));
    };
    fetchCharacters();
  }, []);
}

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
