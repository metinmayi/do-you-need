import { useEffect } from "react";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { getGuildCharacters } from "../api/doYouNeed/getGuildCharacters";
import { ICharacter } from "../models/ICharacter";
import { setList } from "../store/features/roster/rosterSlice";
import { AppDispatch, RootState } from "../store/store";

/**
 * Custom hook that retrieves characters from the API and sets them as the updated roster.
 */
export function useFetchCharacters() {
  const dispatch = useAppDispatch();
  const guild = useAppSelector((state) => state.guildReducer);
  useEffect(() => {
    const fetchCharacters = async () => {
      const fetchedCharacters: ICharacter[] = await getGuildCharacters(guild);
      dispatch(setList(fetchedCharacters));
    };
    fetchCharacters();
  }, []);
}

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
