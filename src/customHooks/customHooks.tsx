import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

/**
 *
 * @param query Pixels to compare against
 * @returns True if smaller, false if larger
 */
export const useMediaQuery = (query: number) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth <= query);

  const updateMedia = () => {
    setDesktop(window.innerWidth <= query);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return isDesktop;
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
