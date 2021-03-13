import React from 'react';
import Typography from "@material-ui/core/Typography";
import Gallery from 'react-grid-gallery';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    header: {},
    clear: {
      clear: 'both',
    },
  }),
);

export default function Places() {
  const classes = useStyles();
  const IMAGES =
    [{
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 200,
      caption: "After Rain (Jeshu John - designerspics.com)"
    },
      {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200,
        // tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
      },

      {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      }]

  return (
    <Section>
      <SectionHeader>Интересные места</SectionHeader>

      <Gallery
        images={IMAGES}
        showLightboxThumbnails={true}
        enableImageSelection={false}
        rowHeight={360}
      />
    </Section>
  );
}
