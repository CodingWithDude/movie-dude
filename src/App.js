import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { Box, Toolbar } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Styles from "./styles/Styles";

const App = () => {
  const theme = Styles;

  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex" flexDirection="column">
        <Sidebar windowLength={window.innerWidth} />
        <Navbar windowLength={window.innerWidth} />
        <Toolbar></Toolbar>
        <MainContent windowLength={window.innerWidth} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
