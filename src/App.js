import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";

import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { Box, Toolbar, AppBar, styled } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Styles from "./styles/Styles";

const App = () => {
  const theme = Styles;
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  // Sidebar width
  const drawerWidth = 240;

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=8b78faef`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
      setSearchSubmitted(false);
    }
  };

  useEffect(() => {
    if (searchSubmitted) {
      getMovieRequest(searchValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchSubmitted]);

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
      {/* Main Container */}
      <Box display="flex" flexDirection="column">
        {/* Sidebar */}
        <Sidebar
          windowLength={window.innerWidth}
          drawerWidth={drawerWidth}
          setSearchValue={setSearchValue}
          setSearchSubmitted={setSearchSubmitted}
        />
        {/* AppBar */}
        <AppBar
          sx={{
            width:
              window.innerWidth >= 600
                ? `calc(100% - ${drawerWidth}px)`
                : "100%",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
            <SearchForm
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              searchSubmitted={searchSubmitted}
              setSearchSubmitted={setSearchSubmitted}
            ></SearchForm>
          </Toolbar>
        </AppBar>
        {/* Main Content */}
        <Toolbar></Toolbar>
        <MainContent
          windowLength={window.innerWidth}
          drawerWidth={drawerWidth}
          movies={movies}
        />
      </Box>
    </ThemeProvider>
  );
};

export default App;
