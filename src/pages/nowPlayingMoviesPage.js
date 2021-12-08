import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getNowPlaying } from "../api/tmdb-api";
import AddToFavouritesIcon from "../components/cardIcons/addToFavorites";

const NowPlayingMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    "nowPlaying",
    getNowPlaying
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;

  const favorites = movies.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  const AddToFavoritesIcon = (movieId) => true;
  return (
    <PageTemplate
      title="NOW IN CINEMAS NEAR YOU"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />;
      }}
    />
  );
};

export default NowPlayingMoviesPage;
