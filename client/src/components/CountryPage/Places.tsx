import React from 'react';
import Typography from '@material-ui/core/Typography';
import Gallery from 'react-grid-gallery';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Section from './Section';
import SectionHeader from './SectionHeader';
import { useTranslation } from 'react-i18next';
import { IPlace } from '../../common/interfaces/placeInterface';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    header: {},
    clear: {
      clear: 'both',
    },
  }),
);

const caption = (place: IPlace) => (
  <div>
    <Typography variant='h6' component='h3'>
      {place.name}
    </Typography>
    <Typography variant='caption'>{place.description}</Typography>
  </div>
);

interface IProps {
  places: IPlace[];
}

export default function Places({ places }: IProps) {
  const classes = useStyles();
  const { t } = useTranslation();

  const images = places.map((place) => ({
    src: place.imgUrl,
    thumbnail: place.imgUrl,
    thumbnailWidth: 320,
    thumbnailHeight: 200,
    caption: `${place.name}.   ${place.description}`,
    // caption: caption(place),
  }));

  return (
    <Section>
      <SectionHeader>{t('places')}</SectionHeader>

      <Gallery
        images={images}
        showLightboxThumbnails={true}
        enableImageSelection={false}
        rowHeight={360}
      />
    </Section>
  );
}
