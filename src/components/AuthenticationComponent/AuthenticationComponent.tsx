import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTHENTICATED_URL } from "../../config/config";
import { useAppDispatch } from "../../customHooks/useAppDispatch";
import { setGuild } from "../../store/features/guild/guildSlice";

interface AuthenticationComponentProps {
  children: any;
}
export const AuthenticationComponent: React.FC<
  AuthenticationComponentProps
> = ({ children }) => {
  const redirect = useNavigate();
  const dispatch = useAppDispatch();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    async function authenticate() {
      const response = await fetch(AUTHENTICATED_URL, {
        credentials: "include",
      });

      if (response.status !== 200) {
        return redirect("/login");
      }

      const data = await response.json();

      if (data[0]) {
        dispatch(setGuild(data[0]));
      }
      setIsAuthenticated(true);
    }
    authenticate();
  }, []);
  return isAuthenticated && children;
};
