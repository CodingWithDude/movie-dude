import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box, dividerClasses } from "@mui/material";

const MovieList = ({ movies }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "18px",
          justifyContent: "center",
          overflowX: "scroll",
        }}
      >
        {movies &&
          movies.map((movie, index) => (
            <Card sx={{ minWidth: "150px", maxWidth: "200px" }} key={index}>
              <CardActionArea>
                {movie.poster_path !== null && (
                  <CardMedia
                    component="img"
                    height="fit-content"
                    image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt="movie"
                  />
                )}
                <CardContent>
                  <Typography variant="h6" component="div">
                    {movie.title !== null && movie.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </Box>
    </Box>
  );
};

export default MovieList;
