import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ updateItem, deleteItem, movies }) => {
  return (
    <div className="col-8 container movie_list">
      {movies.map((movie) => {
        return (
          <MovieCard
            updateItem={updateItem}
            deleteItem={deleteItem}
            key={movie.id}
            movie={movie}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
