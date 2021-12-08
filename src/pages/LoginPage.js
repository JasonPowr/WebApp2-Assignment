import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/Buttons/LoginButton";
import React from "react";
import PageTemplate from "../components/templateLoginPage/pageTemplate";

const LoginPage = (props) => {
const { isAuthenticated } = useAuth0();  


return (
        <PageTemplate 
        title="Please Log in to view Movies" 
        heading="Hello And Welcome"
        content="To this TMDB client Please sign in using Auth0 to continue."/>
);
};

export default LoginPage;


