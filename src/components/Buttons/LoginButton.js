import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const LoginButton = () => {
    const { loginWithPopup } = useAuth0();

    const useStyles = makeStyles({
        div: {
            backgroundColor:"Red",
            height:"50px",
            width:"200px",
            justifyContent:"center",
            textAlign:"center",
            margin: "Auto",
            borderRadius:"20px",
            display:"flex",
            position:"relative",
            top:"100px"
        },
        Button: {
            color:"White",
        }
    });

    const classes = useStyles();

    return(
        <div className={classes.div}>
        <Button className={classes.Button} onClick={() => loginWithPopup()}> 
         Log In
        </Button>
        </div>
    )

}

export default LoginButton;