import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import LandingPage from "./components/LandingPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
