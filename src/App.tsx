import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";

const App: React.FC = () => {
  // States
  const [online, setonline] = useState(true);
  return <>{online && <LandingPage />}</>;
};

export default App;
