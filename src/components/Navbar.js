import {
  AppBar,
  styled,
  Toolbar,
  Box,
  FormControl,
  InputAdornment,
  TextField,
  Input,
  InputLabel,
} from "@mui/material";
import InputWithIcon from "./InputWithIcon";

const Navbar = ({ windowLength, drawerWidth }) => {
  const StyledAppBar = styled(AppBar)({
    width: windowLength >= 600 ? `calc(100% - ${drawerWidth}px)` : "100%",
  });

  return (
    <StyledAppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <InputWithIcon></InputWithIcon>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
