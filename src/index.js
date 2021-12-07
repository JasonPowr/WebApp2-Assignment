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
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton/LoginButton";
import LogoutButton from "./components/LogoutButton/LogoutButton";

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
            <>
            <LoginButton />
            <LogoutButton />
            </>
            <Route exact path="/movies/popular" component={AddMostPopularPage} />
            <Route exact path="/movies/topRated" component={AddTopRatedPage} />
            <Route exact path="/movies/nowplaying" component={AddNowPlayingMoviePage} />
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <Route path="/movies/:id" component={MoviePage} />
            <Route exact path="/" component={HomePage} />
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