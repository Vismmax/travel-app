import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Information from './Information';
import Places from './Places';
import Video from './Video';
import Location from './Location';
import SideBar from '../SideBar';
import { langStore } from '../common/commonSlice';
import { countryStore, getCountry, isLoadingStore } from './countrySlice';
import Spinner from '../common/Spinner';

export default function CountryPage() {
  const { alpha3Code } = useParams<{ alpha3Code: string }>();
  const dispatch = useDispatch();
  const country = useSelector(countryStore);
  const lang = useSelector(langStore);
  const isLoading = useSelector(isLoadingStore);

  const fetchCountry = () => {
    dispatch(getCountry(alpha3Code));
  };

  useEffect(() => {
    fetchCountry();
  }, [lang]);

  return (
    <>
      {isLoading && <Spinner />}
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <div className='root'>
            <Information country={country.country} info={country.info} />
            <Places places={country.places} />
            <Video video={country.country.videoUrl} />
            <Location info={country.info} />
          </div>
        </Grid>

        <Grid item xs={12} md={3}>
          <SideBar country={country} />
        </Grid>
      </Grid>
    </>
  );
}
