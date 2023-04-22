import NavComponent from "../components/NavComponent";
import { Link, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { BrowserRouter } from 'react-router-dom';

export const MainApp = () => {
  return (
    <>
    <BrowserRouter>
      <NavComponent />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
      </BrowserRouter>
    </>
  );
};
