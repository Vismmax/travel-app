import React, {useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import './DateClock.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    clock: {
      width: 200,
      height: 200,
      margin: '0 auto',
      borderRadius: '50%',
    }
  }),
);

export default function DateClock() {
  const classes = useStyles();

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <section className={classes.root}>
      <Paper className={classes.clock} elevation={3}>
        <Clock value={value} size={200} />
      </Paper>
    </section>
  );
}
