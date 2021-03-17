import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateClock from './DateClock';
import DateCalendar from './DateCalendar';
import Weather from './Weather';
import Exchange from './Exchange';
import { ICountryFull } from '../../common/interfaces/countryInterfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  }),
);

interface IProps {
  country: ICountryFull;
}

export default function SideBar({ country }: IProps) {
  const classes = useStyles();

  return (
    <aside>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <DateClock />
        </Grid>
        <Grid item xs={12} md={12}>
          <DateCalendar />
        </Grid>
        <Grid item xs={12} md={12}>
          {country.info.geo && (
            <Weather country={country.country} info={country.info} />
          )}
        </Grid>
        <Grid item xs={12} md={12}>
          <Exchange info={country.info} />
        </Grid>
      </Grid>
    </aside>
  );
}
