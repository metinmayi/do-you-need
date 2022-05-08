import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";

const App: React.FC = () => {
  // States
  const [online, setonline] = useState(true);
  return <>{online && <LoginPage />}</>;
};

export default App;
