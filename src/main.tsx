import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./pages/App.tsx";
import Login from "./pages/Login.tsx";
import Repository from "./pages/Repository.tsx";
import Signup from "./pages/Signup.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/repository" element={<Repository/>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
