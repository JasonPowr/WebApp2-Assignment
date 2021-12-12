import React from "react";
import Header from "../headerMovieList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import LoginButton from "../Buttons/LoginButton";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
  text: {
      width:"600px",
      textAlign:"center",
      position:"relative",
      top:"150px",
      fontFamily:"cursive",
      justifyContent:"center",
      margin: "Auto",
  },
});

function PageTemplate({title,heading,content}) {
  const classes = useStyles();


  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
        <LoginButton/>
        <h1 className={classes.text}> {heading} </h1>
        <h2 className={classes.text}> {content} </h2>
      </Grid>
    </Grid>
  );
}
export default PageTemplate;
