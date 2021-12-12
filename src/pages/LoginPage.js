import React from "react";
import PageTemplate from "../components/templateLoginPage/pageTemplate";

const LoginPage = () => {

return (
        <PageTemplate 
        title="Please Log in to view Movies" 
        heading="Hello And Welcome"
        content="To this TMDB client Please sign in using Auth0 to continue. Once signed in you 
        can then navigate to the home page."/>
);
};

export default LoginPage;


