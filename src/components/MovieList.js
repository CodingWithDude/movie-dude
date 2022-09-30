import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";

const MovieList = ({ movies }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          paddingBottom: "18px",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" component="h1">
          Heading
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "18px",
          justifyContent: "center",
        }}
      >
        {movies &&
          movies.map((movie, index) => (
            <Card sx={{ width: 345 }} key={index}>
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
                  <Typography variant="h5" component="div">
                    {movie.title !== null && movie.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {movie.overview !== null && movie.overview}
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
