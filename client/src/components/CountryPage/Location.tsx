import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {MapContainer, TileLayer, Marker, Popup, GeoJSON, } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import IconCapital from "./IconCapital";

const geo = {
  "type": "Feature",
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [[[[-31.54, 39.51], [-31.26, 39.89], [-30.9, 39.83], [-31, 39.2], [-31.41, 39.19], [-31.54, 39.51]]], [[[-29.09, 38.62], [-28.3, 38.96], [-28.3, 39.17], [-28.05, 39.31], [-27.7, 39.11], [-27.88, 38.81], [-27.64, 38.72], [-27.54, 38.94], [-27.23, 39], [-26.76, 38.71], [-27, 38.43], [-27.51, 38.52], [-28.22, 38.18], [-28.89, 38.35], [-29.09, 38.62]]], [[[-25.04, 36.73], [-25.37, 36.82], [-26.07, 37.74], [-25.9, 38.09], [-25.03, 38.02], [-24.55, 37.36], [-24.81, 36.82], [-25.04, 36.73]]], [[[-17.5, 32.83], [-17.22, 33.08], [-16.63, 32.95], [-16.57, 33.21], [-16.35, 33.32], [-16.05, 33.18], [-16.09, 32.92], [-16.42, 32.79], [-16.23, 32.41], [-16.4, 32.21], [-17.24, 32.51], [-17.5, 32.83]]], [[[-15.78, 30.34], [-15.67, 30.02], [-15.93, 29.85], [-16.19, 29.87], [-16.23, 30.17], [-15.78, 30.34]]], [[[-9.14, 41.87], [-8.96, 41.86], [-8.87, 41.86], [-8.2, 42.15], [-8.13, 41.81], [-7.91, 41.93], [-7.43, 41.81], [-7.14, 41.99], [-6.57, 41.96], [-6.55, 41.69], [-6.19, 41.57], [-6.93, 41.03], [-6.82, 40.61], [-6.79, 40.33], [-7.03, 40.19], [-6.86, 40.01], [-7.02, 39.67], [-7.54, 39.66], [-6.95, 39.02], [-7.34, 38.44], [-7.09, 38.17], [-6.94, 38.22], [-7, 38.02], [-7.26, 37.98], [-7.52, 37.56], [-7.37, 36.97], [-7.84, 36.76], [-8.95, 36.71], [-9.24, 36.98], [-9.15, 37.89], [-9.73, 38.64], [-9.82, 39.47], [-9.15, 40.27], [-9.02, 40.67], [-9.14, 41.87]]]]
  },
  "properties": {"A3": "PRT"}
}


const
  useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {},
      header: {},
      map: {
        height: theme.spacing(30),
        [theme.breakpoints.up('sm')]: {
          height: theme.spacing(50),
        },
        [theme.breakpoints.up('md')]: {
          height: theme.spacing(70),
        },
        [theme.breakpoints.up('lg')]: {
          height: theme.spacing(80),
        },
        [theme.breakpoints.up('xl')]: {
          height: theme.spacing(90),
        },
      }
    }),
  );

export default function Location() {
  const classes = useStyles();

  return (
    <Section>
      {/*! Карта*/}
      <SectionHeader>
        Карта
      </SectionHeader>

      <MapContainer
        center={[38.71667, -9.13333]}
        zoom={5}
        scrollWheelZoom={true}
        className={classes.map}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[38.71667, -9.13333]} icon={IconCapital} >
          <Popup>
          {/* ! Столица*/}
            Столица
          </Popup>
        </Marker>
        <GeoJSON
          // @ts-ignore
          data={geo}
          // data='/geo/prt.geo.json'
        />
      </MapContainer>
    </Section>
  );
}
