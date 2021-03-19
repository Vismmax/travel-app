import React from 'react';
import { useDispatch } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import ButtonAddImage from './ButtonAddImage';
import { IPlace } from '../../common/interfaces/placeInterface';
import { Languages } from '../../common/enums/languages';
import { PlaceField, setPlaceField, setPlaceImage } from './editorSlice';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(3),
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
  id: number;
  lang: Languages;
  place: IPlace;
}

export default function EditorPlace({ id, lang, place }: IProps) {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  interface IEv {
    target: {
      value: string;
    };
  }

  const handleAddImg = (url: string) => {
    dispatch(
      setPlaceImage({
        id,
        url,
      }),
    );
  };

  const handleChangeName = (ev: IEv) => {
    dispatch(
      setPlaceField({
        id,
        lang,
        field: PlaceField.name,
        value: ev.target.value,
      }),
    );
  };

  const handleChangeDescription = (ev: IEv) => {
    dispatch(
      setPlaceField({
        id,
        lang,
        field: PlaceField.description,
        value: ev.target.value,
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
              image={place.imgUrl}
              title={place.name}
            />
            <ButtonAddImage onAddImg={handleAddImg} />
          </Grid>
          <Grid item xs={12} sm={7}>
            <CardContent>
              <TextField
                className={classes.input}
                label={t('place')}
                value={place.name}
                onChange={handleChangeName}
              />
              <TextField
                className={classes.input}
                label={t('description')}
                multiline
                rows={3}
                rowsMax={3}
                value={place.description}
                onChange={handleChangeDescription}
                variant='outlined'
              />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
