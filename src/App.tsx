import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthenticationComponent } from "./components/AuthenticationComponent/AuthenticationComponent";
import { BossPage } from "./pages/BossPage";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { MissingPage } from "./pages/MissingPage";
import { RegisterPage } from "./pages/RegisterPage";
import { SynchronizePage } from "./pages/SynchronizePage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route
          path="/bossPage"
          element={
            <AuthenticationComponent>
              <BossPage />
            </AuthenticationComponent>
          }></Route>
        <Route
          path="/synchronize"
          element={
            <AuthenticationComponent>
              <SynchronizePage />
            </AuthenticationComponent>
          }></Route>
        <Route path="*" element={<MissingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
