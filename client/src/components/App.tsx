import React from 'react';
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Header/>
      <Main/>
      <Footer/>
    </Container>
  );
}

export default App;
