import React from "react";
import Navbar from "../Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <Container fixed>{children}</Container>

      <footer>
        <section>
          <span>soy unfooter 🦀</span>
        </section>
      </footer>
    </>
  );
};

export default Layout;
