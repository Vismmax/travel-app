import React from 'react';
import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(5),
    },
    header: {
      fontSize: theme.typography.h5.fontSize,
      [theme.breakpoints.up('sm')]: {
        fontSize: theme.typography.h4.fontSize,
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: theme.typography.h3.fontSize,
      },
    },
  }),
);

type Props = {
  children: string;
}

export default function SectionHeader({children}: Props) {
  const classes = useStyles();

  return (
      <header className={classes.root}>
        <Typography className={classes.header} variant="h4" component="h2">
          {children}
        </Typography>
      </header>
  );
}
