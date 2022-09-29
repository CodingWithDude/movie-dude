import { Box, styled, Typography } from "@mui/material";
import MovieList from "./MovieList";

const MainContent = ({ windowLength, drawerWidth, movies }) => {
  const StyledBox = styled(Box)({
    display: "flex",
    alignSelf: "flex-end",
    width: windowLength >= 600 ? `calc(100% - ${drawerWidth}px)` : "100%",
  });

  return (
    <StyledBox p={2} sx={{ display: "flex", flexDirection: "column" }}>
      <MovieList movies={movies}></MovieList>
    </StyledBox>
  );
};

export default MainContent;
