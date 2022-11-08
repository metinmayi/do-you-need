import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTHENTICATED_URL } from "../../config/config";

interface AuthenticationComponentProps {
  children: any;
}
export const AuthenticationComponent: React.FC<
  AuthenticationComponentProps
> = ({ children }) => {
  const redirect = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    async function authenticate() {
      const response = await fetch(AUTHENTICATED_URL, {
        credentials: "include",
      });

      if (response.status !== 200) {
        return redirect("/login");
      }
      setIsAuthenticated(true);
    }
    authenticate();
  }, []);
  return isAuthenticated && children;
};
