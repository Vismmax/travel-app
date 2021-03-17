import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import ButtonAddImage from './ButtonAddImage';
import { Languages } from '../../common/enums/languages';
import {
  setCountryImage,
  setCountryField,
  countriesStore,
  CountryField,
} from './editorSlice';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(7),
    },
    posRelative: {
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '100%',
      minHeight: theme.spacing(30),
    },
    input: {
      width: '100%',
      marginBottom: theme.spacing(3),
    },
  }),
);

interface IProps {
  lang: Languages;
}

export default function EditorCountry({ lang }: IProps) {
  const classes = useStyles();
  const { t } = useTranslation();
  const countries = useSelector(countriesStore);
  const dispatch = useDispatch();

  const country = countries[lang];

  interface IEv {
    target: {
      value: string;
    };
  }

  const handleAddImg = (url: string) => {
    dispatch(setCountryImage(url));
  };

  const handleChangeName = (ev: IEv) => {
    dispatch(
      setCountryField({
        field: CountryField.name,
        value: ev.target.value,
        lang,
      }),
    );
  };

  const handleChangeCapital = (ev: IEv) => {
    dispatch(
      setCountryField({
        field: CountryField.capital,
        value: ev.target.value,
        lang,
      }),
    );
  };

  const handleChangeDescription = (ev: IEv) => {
    dispatch(
      setCountryField({
        field: CountryField.description,
        value: ev.target.value,
        lang,
      }),
    );
  };

  const handleChangeVideoUrl = (ev: IEv) => {
    dispatch(
      setCountryField({
        field: CountryField.videoUrl,
        value: ev.target.value,
        lang,
      }),
    );
  };

  return (
    <div className={classes.root}>
      <Card>
        <Grid container spacing={2}>
          <Grid className={classes.posRelative} item xs={12} sm={5}>
            <CardMedia
              className={classes.image}
              image={country.imgUrl}
              title={country.name}
            />
            <ButtonAddImage onAddImg={handleAddImg} />
          </Grid>
          <Grid item xs={12} sm={7}>
            <CardContent>
              <TextField
                className={classes.input}
                label={t('country')}
                value={country.name}
                onChange={handleChangeName}
              />
              <TextField
                className={classes.input}
                label={t('capital')}
                value={country.capital}
                onChange={handleChangeCapital}
              />
              <TextField
                className={classes.input}
                label={t('description')}
                multiline
                rows={6}
                rowsMax={6}
                value={country.description}
                onChange={handleChangeDescription}
                variant='outlined'
              />
              <TextField
                className={classes.input}
                label={`${t('video')} YouTube`}
                value={country.videoUrl}
                onChange={handleChangeVideoUrl}
              />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
