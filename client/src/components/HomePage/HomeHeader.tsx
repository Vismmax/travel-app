import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(5),
    },
    header: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      fontSize: theme.typography.h5.fontSize,
      [theme.breakpoints.up('sm')]: {
        fontSize: theme.typography.h4.fontSize,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: theme.typography.h3.fontSize,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: theme.typography.h2.fontSize,
      },
    },
  }),
);

export default function HomeHeader() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Typography
        className={classes.header}
        variant='h5'
        component='h1'
        align='center'
      >
        {t('title')}
      </Typography>

      <Grid container spacing={5} justify='flex-end'>
        <Grid item xs={8} sm={7} md={6} lg={5} xl={4}>
          <Typography variant='subtitle1' component='cite' display='block'>
            {t('quote.text')}
          </Typography>
          <Typography variant='subtitle1' display='block' align='right'>
            {t('quote.author')}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
