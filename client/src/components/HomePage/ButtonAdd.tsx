import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'sticky',
      left: '100%',
      bottom: theme.spacing(3),
    },
  }),
);

export default function ButtonAdd() {
  const classes = useStyles();

  return (
    <Fab href='/editor' className={classes.root} color='primary'>
      <AddIcon />
    </Fab>
  );
}
