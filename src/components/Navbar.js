import { AppBar, styled, Toolbar } from "@mui/material";

const Navbar = ({ windowLength }) => {
  const StyledAppBar = styled(AppBar)({});

  return (
    <StyledAppBar
      // width 240px value from drawerWidth
      sx={{ width: windowLength >= 600 ? "calc(100% - 240px)" : "100%" }}
    >
      <Toolbar>Navbar</Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
