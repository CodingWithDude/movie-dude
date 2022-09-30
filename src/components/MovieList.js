import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box, dividerClasses } from "@mui/material";

const MovieList = ({ movies }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {movies &&
        movies.map((movie, index) => (
          <Card
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "250px",
              textOverflow: "ellipsis",
              padding: "10px",
            }}
            key={index}
          >
            {movie.poster_path !== null && (
              <CardMedia
                component="img"
                height="fit-content"
                image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="movie"
                sx={{
                  width: "225px",
                  height: "100%",
                  borderRadius: "30px",
                  "&:hover": {
                    cursor: "pointer",
                    transform: "scale(1.03)",
                  },
                }}
              />
            )}

            <Typography
              sx={{
                width: "225px",
                paddingTop: "10px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textAlign: "center",
                fontWeight: "bold",
              }}
              variant="p"
            >
              {movie.title}
            </Typography>
          </Card>
        ))}
    </Box>
  );
};

export default MovieList;
