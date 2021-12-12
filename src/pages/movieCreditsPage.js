import React from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieReview from "../components/movieReview";

const MovieCreditPage = (props) => {
  const {movie, credit} = props.location.state
  return (
    <PageTemplate movie={movie}>
      <MovieReview credit={credit} />
    </PageTemplate>
  );
};

export default withRouter(MovieCreditPage);