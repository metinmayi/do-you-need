import { useNavigate } from "react-router-dom";

const useRedirect = () => {
  return useNavigate();
};

export { useRedirect };
