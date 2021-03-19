import React from 'react';
import { useSelector } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import EditorPlace from './EditorPlace';
import Typography from '@material-ui/core/Typography';
import { Languages } from '../../common/enums/languages';
import { placesStore } from './editorSlice';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    title: {
      marginBottom: theme.spacing(3),
    },
  }),
);

interface IProps {
  lang: Languages;
}

export default function EditorPlaces({ lang }: IProps) {
  const classes = useStyles();
  const { t } = useTranslation();
  const places = useSelector(placesStore);

  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
        variant='h5'
        component='h2'
        align={'center'}
      >
        {t('places')}
      </Typography>
      {places.map((place, id) => (
        <EditorPlace
          key={id + place[lang].imgUrl}
          id={id}
          lang={lang}
          place={place[lang]}
        />
      ))}
    </div>
  );
}
