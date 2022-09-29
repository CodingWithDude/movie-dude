import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { Box, Toolbar } from "@mui/material";

const App = () => {
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
    <Box display="flex" flexDirection="column">
      <Sidebar />
      <Navbar windowLength={window.innerWidth} />
      <Toolbar></Toolbar>
      <MainContent windowLength={window.innerWidth} />
    </Box>
  );
};

export default App;
