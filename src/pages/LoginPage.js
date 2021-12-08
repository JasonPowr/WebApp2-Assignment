import React, { useContext, useState } from "react"
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/Buttons/LoginButton";
import LogoutButton from "../components/Buttons/Logout Button";

const LoginPage = (props) => {
const { isAuthenticated } = useAuth0();

return (
    <>
        <LoginButton />
        <LogoutButton />
        <h3> User is {isAuthenticated ? "Logged in" : "Not Logged in"}</h3>
    </>
);
};

export default LoginPage;


