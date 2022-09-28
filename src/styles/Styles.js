import { createTheme } from "@mui/material/styles";

const Colors = {
  primary: "#1976d2",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
  },
});

export default theme;
