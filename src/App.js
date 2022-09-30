import React from "react";
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
    const url = `https://api.themoviedb.org/3/search/movie?api_key=bd248f777e0f5aaa9962bae98c088f34&language=en-US&query=${searchValue}&page=1&include_adult=false`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.results) {
      setMovies(responseJson.results);
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
          setMovies={setMovies}
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
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
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
