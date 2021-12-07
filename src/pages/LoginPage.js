import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from '../components/LoginButton/LoginButton';
import LogoutButton from '../components/LogoutButton/LogoutButton'

const LoginPage = (props) => {

return (
    <>
    <p>It works</p>
    <LoginButton />
    <LogoutButton />
    </>

)
};

export default LoginPage;

