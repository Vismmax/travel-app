import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Fab from '@material-ui/core/Fab';
import { save } from './editorSlice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'sticky',
      left: '100%',
      bottom: theme.spacing(3),
    },
  }),
);

export default function ButtonSave() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(save());
  };

  return (
    <Fab
      className={classes.root}
      color='primary'
      aria-label='save country'
      onClick={handleSave}
    >
      <SaveIcon fontSize='large' />
    </Fab>
  );
}
