import { useNavigate } from "react-router-dom";
import { LOGOUT_URL } from "../../config/config";

/**
 * Custom hook for logging out
 * @returns {() => void}
 */
export function useLogout() {
  const redirect = useNavigate();

  return () => {
    fetch(LOGOUT_URL, {
      method: "POST",
      credentials: "include",
    });
    redirect("/login");
  };
}
