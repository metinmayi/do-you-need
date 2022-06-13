import { useNavigate } from "react-router-dom";

const useRedirect = () => {
  return useNavigate();
};

/**
 * remove later
 */
const hasVisitedBefore = () => {
  return localStorage.getItem("hasVisited") ? true : false;
};

export { useRedirect, hasVisitedBefore };
