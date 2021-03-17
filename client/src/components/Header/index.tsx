import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './index.css';
import LogoApp from './LogoApp';
import Search from './Search';
import User from './User';
import Language from './Language';

const useStyles = makeStyles((theme: Theme) => createStyles({}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar>
        <LogoApp />
        <Search />
        <Language />
        <User />
      </Toolbar>
    </AppBar>
  );
}
