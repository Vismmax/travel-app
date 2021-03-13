import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    header: {},
  }),
);

export default function Location() {
  const classes = useStyles();

  return (
    <Section>
      <SectionHeader>Карта</SectionHeader>

    </Section>
  );
}
