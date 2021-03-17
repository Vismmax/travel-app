import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardCountry from './CardCountry';
import { useTranslation } from 'react-i18next';
import HomeHeader from './HomeHeader';
import { countriesStore, getCountries } from './countriesSlice';
import { langStore } from '../common/commonSlice';
import ButtonAdd from './ButtonAdd';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
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
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    item: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  }),
);

export default function HomePage() {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const countries = useSelector(countriesStore);
  const lang = useSelector(langStore);

  const fetchCountries = () => {
    dispatch(getCountries());
  };

  useEffect(() => {
    fetchCountries();
  }, [lang]);

  return (
    <div className={classes.root}>
      <HomeHeader />

      <Grid container spacing={5}>
        {countries.map((country) => (
          <Grid item xs={12} md={6} xl={4}>
            <CardCountry country={country} />
          </Grid>
        ))}
      </Grid>

      <ButtonAdd />
    </div>
  );
}
