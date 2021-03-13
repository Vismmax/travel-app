import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(10),
      [theme.breakpoints.up('sm')]: {
        marginBottom: theme.spacing(12),
      },
      [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(15),
      },
      [theme.breakpoints.up('xl')]: {
        marginBottom: theme.spacing(20),
      },
    },
    clear: {
      clear: 'both',
    },
  }),
);

type Props = {
  children: JSX.Element | JSX.Element[];
}

export default function Section({children}: Props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      {children}
      <div className={classes.clear}></div>
    </section>
  );
}
