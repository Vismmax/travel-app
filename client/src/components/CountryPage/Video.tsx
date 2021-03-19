import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player/youtube';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Section from './Section';
import SectionHeader from './SectionHeader';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    header: {},
    wrapper: {
      position: 'relative',
      maxWidth: 1280,
      margin: '0 auto',
      paddingTop: '56.25%',
    },
    player: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
  }),
);

interface IPrors {
  video: string;
}

export default function Video({ video }: IPrors) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Section>
      <SectionHeader>{t('video')}</SectionHeader>

      <div className={classes.wrapper}>
        <ReactPlayer
          className={classes.player}
          url={video}
          controls={true}
          width='100%'
          height='100%'
        />
      </div>
    </Section>
  );
}
