import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const LogoutButton = () => {
    const { logout } = useAuth0();
    const theme = useTheme();

    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            color: "white",
          },
          offset: theme.mixins.toolbar,
        });

    const classes = useStyles();

    return(
        <Button className={classes.root} onClick={() => logout()}> 
         Log Out
        </Button>
    )

}

export default LogoutButton;