import { AppBar, styled, Toolbar } from "@mui/material";

const Navbar = ({ windowLength }) => {
  const StyledAppBar = styled(AppBar)({
    width: windowLength >= 600 ? "calc(100% - 240px)" : "100%",
  });

  return (
    <StyledAppBar>
      <Toolbar>Navbar</Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
