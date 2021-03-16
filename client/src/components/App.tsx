import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
  }),
);

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="xl" disableGutters>
      <Header/>
      <Main/>
      <Footer/>
    </Container>
  );
}

export default App;
