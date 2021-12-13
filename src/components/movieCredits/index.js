import React, { useEffect, useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getMovieCredits } from "../../api/tmdb-api";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});

export default function MovieCredits({ movie }) {
  const classes = useStyles();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movie.id).then((credits) => {
      setCredits(credits.cast);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="reviews table">
        <TableHead>
          <TableRow>
            <TableCell >Name</TableCell>
            <TableCell align="center">Character</TableCell>
            <TableCell align="right">Popularity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {credits.map((r) => (
            <TableRow key={r.id}>
              <TableCell component="th" scope="row"> {r.name} </TableCell>
              <TableCell >{r.character}</TableCell>
              <TableCell >{r.popularity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}