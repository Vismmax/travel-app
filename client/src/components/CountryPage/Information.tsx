import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Section from './Section';
import {
  ICountry,
  ICountryInfo,
} from '../../common/interfaces/countryInterfaces';

function getUrlFlag(code: string, width: number = 80): string {
  return `https://flagcdn.com/w${width}/${code.toLocaleLowerCase()}.png`;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    h1: {
      fontSize: theme.typography.h4.fontSize,
      [theme.breakpoints.up('sm')]: {
        fontSize: theme.typography.h3.fontSize,
      },
    },
    subheaderH1: {},
    avatar: {
      backgroundColor: red[500],
    },
    flag: {
      display: 'none',
      width: 80,
      height: 53,
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  }),
);

interface IProps {
  country: ICountry;
  info: ICountryInfo;
}

export default function Information({ country, info }: IProps) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Section>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              variant='rounded'
              aria-label='recipe'
              alt={country.name}
              src={getUrlFlag(info.alpha2Code)}
              className={classes.flag}
            />
          }
          title={
            <Typography variant='h3' component='h1' className={classes.h1}>
              {country.name}
            </Typography>
          }
          subheader={
            <Typography gutterBottom>
              <span>{t('capital')}: </span>
              <Typography
                variant='h5'
                component='span'
                gutterBottom
                className={classes.subheaderH1}
              >
                {country.capital}
              </Typography>
            </Typography>
          }
        />
        <CardMedia
          className={classes.media}
          image={country.imgUrl}
          title={country.name}
        />
        <CardContent>
          <Typography component='p'>{country.description}</Typography>
        </CardContent>
      </Card>
    </Section>
  );
}
