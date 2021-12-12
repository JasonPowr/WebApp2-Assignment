import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import AddNowPlayingMoviePage from './pages/nowPlayingPage';
import AddTopRatedPage from './pages/topRated';
import AddMostPopularPage from './pages/popularPage';
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import AddLoginPage from "./pages/LoginPage";
import PrivateRoute from "./protectedRoute";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
            {" "}
            <Switch>
            <Route exact path="/login" component={AddLoginPage}  />  
            <PrivateRoute path="/movies/popular" component={AddMostPopularPage} />
            <PrivateRoute path="/movies/topRated" component={AddTopRatedPage} />
            <PrivateRoute path="/movies/nowplaying" component={AddNowPlayingMoviePage} />
            <PrivateRoute path="/reviews/form" component={AddMovieReviewPage} />
            <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
            <PrivateRoute path="/movies/upcoming" component={UpcomingMoviesPage} />
            <PrivateRoute path="/movies/favorites" component={FavoriteMoviesPage} />
            <PrivateRoute path="/movies/:id" component={MoviePage} />
            <PrivateRoute exact path="/" component={HomePage} />
            <Redirect from="*" to="/" />
        </Switch>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(
      <Auth0Provider domain={domain}
                      clientId={clientId}
                      redirectUri = {window.location.origin}>
      <App />
      </Auth0Provider>, 
      document.getElementById("root"));