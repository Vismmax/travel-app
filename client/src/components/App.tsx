import React, { Suspense } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Spinner from './common/Spinner';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundImage: 'url("/img/bg.jpg")',
      backgroundSize: 'cover',
    },
  }),
);

function App() {
  const classes = useStyles();

  return (
    <Suspense fallback={<Spinner />}>
      <Container className={classes.root} maxWidth='xl' disableGutters>
        <Header />
        <Main />
        <Footer />
      </Container>
    </Suspense>
  );
}

export default App;
