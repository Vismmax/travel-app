import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
// import ReactPlayer from 'react-player';
import ReactPlayer from 'react-player/youtube';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

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

export default function Video() {
  const classes = useStyles();

  return (
    // <section className={classes.root}>
    //   <header className={classes.header}>
    //     <Typography variant="h4" component="h2" gutterBottom>
    //       Видео о ...
    //     </Typography>
    //   </header>
    //
    //   <div className={classes.wrapper}>
    //     <ReactPlayer
    //       className={classes.player}
    //       url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
    //       controls={true}
    //       width='100%'
    //       height='100%'
    //     />
    //   </div>
    // </section>
    <Section>
      <SectionHeader>Видео о ...</SectionHeader>

      <div className={classes.wrapper}>
        <ReactPlayer
          className={classes.player}
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          controls={true}
          width='100%'
          height='100%'
        />
      </div>
    </Section>
  );
}
