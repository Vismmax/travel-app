import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardCountry from "./CardCountry";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    item: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    }
  }),
);

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6} xl={4}>
          <CardCountry/>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <CardCountry/>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <CardCountry/>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <CardCountry/>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <CardCountry/>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <CardCountry/>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <CardCountry/>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <CardCountry/>
        </Grid>
      </Grid>
    </div>
  );
}
