import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Section from './Section';
import SectionHeader from './SectionHeader';
import IconCapital from './IconCapital';
import { useTranslation } from 'react-i18next';
import { ICountryInfo } from '../../common/interfaces/countryInterfaces';

const useStyles = makeStyles((theme: Theme) =>
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
    },
  }),
);

interface IProps {
  info: ICountryInfo;
}

export default function Location({ info }: IProps) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Section>
      <SectionHeader>{t('map')}</SectionHeader>

      {info.geo && (
        <MapContainer
          center={[info.latCapital, info.lonCapital]}
          zoom={5}
          scrollWheelZoom={true}
          className={classes.map}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker
            position={[info.latCapital, info.lonCapital]}
            icon={IconCapital}
          >
            <Popup>{t('capital')}</Popup>
          </Marker>
          <GeoJSON data={info.geo} />
        </MapContainer>
      )}
    </Section>
  );
}
