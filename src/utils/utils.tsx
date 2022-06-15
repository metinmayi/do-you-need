import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useRedirect = () => {
  return useNavigate();
};

/**
 *
 * @param query Pixels to compare against
 * @returns True if smaller, false if larger
 */
const useMediaQuery = (query: number) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth <= query);

  const updateMedia = () => {
    setDesktop(window.innerWidth <= query);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [window.innerWidth]);
  return isDesktop;
};

/**
 * remove later
 */
const hasVisitedBefore = () => {
  return localStorage.getItem("hasVisited") ? true : false;
};

export { useRedirect, hasVisitedBefore, useMediaQuery };
