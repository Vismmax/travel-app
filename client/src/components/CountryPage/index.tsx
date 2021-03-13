import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Information from "./Information";
import Places from "./Places";
import Video from "./Video";
import Location from "./Location";

export default function CountryPage() {
  return (
    <div className="root">
      <Information/>
      <Places/>
      <Video/>
      <Location/>
    </div>
  );
}
