import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import './Weather.css';
import { langStore } from '../common/commonSlice';
import {
  ICountry,
  ICountryFull,
  ICountryInfo,
} from '../../common/interfaces/countryInterfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  }),
);

interface IProps {
  country: ICountry;
  info: ICountryInfo;
}

export default function Weather({ country, info }: IProps) {
  const classes = useStyles();
  const { t } = useTranslation();
  const lang = useSelector(langStore);

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: process.env.REACT_APP_OPENWEATHER_API_KEY,
    lat: info.latCapital,
    lon: info.lonCapital,
    lang: lang,
    unit: 'metric',
  });

  return (
    <section className={classes.root}>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang={lang}
        locationLabel={country.name}
        unitsLabels={{
          temperature: t('units.temperature'),
          windSpeed: t('units.speed'),
        }}
        showForecast={false}
      />
    </section>
  );
}
