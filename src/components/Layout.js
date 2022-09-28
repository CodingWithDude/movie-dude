import React from "react";
import Container from "@mui/material/Container";
import DrawerLeft from "./DrawerLeft";
import AppBarTop from "./AppBarTop";

const Layout = () => {
  return (
    <Container sx={{ display: "flex" }}>
      <AppBarTop />
      <DrawerLeft />
    </Container>
  );
};

export default Layout;
