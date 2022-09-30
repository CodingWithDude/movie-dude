import { Box, styled, Typography } from "@mui/material";
import MovieList from "./MovieList";
import { useEffect } from "react";

const MainContent = ({ windowLength, drawerWidth, movies }) => {
  const StyledBox = styled(Box)({
    display: "flex",
    alignSelf: "flex-end",
    width: windowLength >= 600 ? `calc(100% - ${drawerWidth}px)` : "100%",
  });

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0 });
  }, [movies]);

  return (
    <StyledBox p={2}>
      <MovieList movies={movies}></MovieList>
    </StyledBox>
  );
};

export default MainContent;
