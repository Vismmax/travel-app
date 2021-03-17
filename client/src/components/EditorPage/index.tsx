import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CheckCountry from './CheckCountry';
import EditorTabs from './EditorTabs';
import ButtonSave from './ButtonSaveProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    posRelative: {
      position: 'relative',
    },
    input: {
      width: '100%',
      marginBottom: theme.spacing(3),
    },
  }),
);

export default function EditorPage() {
  const classes = useStyles();

  const [isCheck, setIscheck] = useState(false);

  const handleCheckCountry = () => {
    setIscheck(true);
  };

  return (
    <div className={classes.root}>
      {isCheck ? (
        <div>
          <EditorTabs />
          <ButtonSave />
        </div>
      ) : (
        <CheckCountry onCheck={handleCheckCountry} />
      )}
    </div>
  );
}
