import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Information from "./Information";
import Places from "./Places";
import Video from "./Video";
import Location from "./Location";
import Grid from "@material-ui/core/Grid";
import {Redirect, Route, Switch} from "react-router-dom";
import HomePage from "../HomePage";
import SideBar from "../SideBar";

export default function CountryPage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={9}>
        <div className="root">
          <Information/>
          <Places/>
          <Video/>
          <Location/>
        </div>
      </Grid>

      <Grid item xs={12} md={3}>
        <SideBar/>
      </Grid>
    </Grid>
  );
}
