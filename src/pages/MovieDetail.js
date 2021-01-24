import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { movieState } from '../movieState';

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(null);

  //useEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovies(currentMovie);
  }, [movies, url]);
  return (
    <div>
      <h1>MovieDetail</h1>
    </div>
  );
};

export default MovieDetail;
