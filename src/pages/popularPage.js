import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getPopular } from "../api/tmdb-api";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import AddToWatchList from '../components/cardIcons/addToWatchList';

const PopularMoviePage = (props) => {
    const [movies, setMovies] = useState([]);
    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  
    const addToFavorites = (movieId) => {
      const updatedMovies = movies.map((m) =>
        m.id === movieId ? { ...m, favorite: true } : m
      );
      setMovies(updatedMovies);
    };
  
    useEffect(() => {
      getPopular().then(movies => {
        setMovies(movies);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <PageTemplate
        title='Most Popular'
        movies={movies}
        
        action={(movie) => {
          return <AddToWatchList movie={movie} />
        }}

        selectFavorite={addToFavorites}
      />
    );
  };
  export default PopularMoviePage;