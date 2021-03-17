import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import { ICountry } from '../../common/interfaces/countryInterfaces';

const useStyles = makeStyles({
  root: {},
  media: {
    height: 240,
  },
});

interface IProps {
  country: ICountry;
}

export default function CardCountry({ country }: IProps) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Card className={classes.root}>
      <CardActionArea href={`/country/${country.alpha3Code}`}>
        <CardMedia
          className={classes.media}
          image={country.imgUrl}
          title={country.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h4' component='h2'>
            {country.name}
          </Typography>
          <Typography gutterBottom>
            <span>{t('capital')}: </span>
            <Typography variant='h6' component='span' gutterBottom>
              {country.capital}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
