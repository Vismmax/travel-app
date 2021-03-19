import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import HomePage from '../HomePage';
import CountryPage from '../CountryPage';
import EditorPage from '../EditorPage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    wrap: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  }),
);

export default function Main() {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Container className={classes.wrap}>
        <Switch>
          <Route exact path='/home' component={HomePage} />
          <Route path='/country/:alpha3Code' component={CountryPage} />
          {/*<Route path="/login" component={LoginPage} />*/}
          <Route path='/editor' component={EditorPage} />
          {/*<Route component={NotFound} />*/}
          <Redirect from='/' to='/home' />
        </Switch>
      </Container>
    </main>
  );
}
