import React from "react";
import { AppBar } from "@mui/material";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const AppBarTop = () => {
  const drawerWidth = 240;
  return (
    <Container>
      <AppBar sx={{ width: `calc(100% - ${drawerWidth}px)` }}>
        <Toolbar>
          <Typography sx={{ flexGrow: 0 }}>Hello</Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default AppBarTop;
