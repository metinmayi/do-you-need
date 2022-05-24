import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { MissingPage } from "./pages/MissingPage";
import { RegisterPage } from "./pages/RegisterPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="*" element={<MissingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
