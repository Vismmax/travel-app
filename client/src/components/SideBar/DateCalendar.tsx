import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DateCalendar.css';
import { langStore } from '../common/commonSlice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    calendar: {
      border: 'none',
      fontFamily: theme.typography.fontFamily,
    },
  }),
);

export default function DateCalendar() {
  const classes = useStyles();
  const lang = useSelector(langStore);

  const [value, onChange] = useState(new Date());

  return (
    <section className={classes.root}>
      <Paper elevation={3}>
        <Calendar
          // @ts-ignore
          onChange={onChange}
          value={value}
          locale={lang}
          className={classes.calendar}
        />
      </Paper>
    </section>
  );
}
