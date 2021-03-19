import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import './DateClock.css';
import { ICountryInfo } from '../../common/interfaces/countryInterfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    clock: {
      width: 200,
      height: 200,
      margin: '0 auto',
      borderRadius: '50%',
    },
  }),
);

interface IProps {
  info: ICountryInfo;
}

export default function DateClock({ info }: IProps) {
  const classes = useStyles();

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    // const interval = setInterval(() => setValue(new Date()), 1000);
    const interval = setInterval(
      () => setValue(calcTime(info.timezones)),
      1000,
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  const calcTime = (UTS: string) => {
    const offset = Number(
      UTS.replace('UTC', '').replace('30', '50').replace(':', '.'),
    );
    const d = new Date();
    const utc = d.getTime() + d.getTimezoneOffset() * 60000;
    const nd = new Date(utc + 3600000 * offset);
    return nd;
  };

  return (
    <section className={classes.root}>
      <Paper className={classes.clock} elevation={3}>
        <Clock value={value} size={200} />
      </Paper>
    </section>
  );
}
