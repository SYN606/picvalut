import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";
import useTheme from "./Hooks/Theme";

const Base = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Base;
