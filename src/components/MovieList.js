import React from "react";

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie, index) => (
        <div key={index}>
          {movie.poster_path !== null && (
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="movie"
            />
          )}
        </div>
      ))}
    </>
  );
};

export default MovieList;
