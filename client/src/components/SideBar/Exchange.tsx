import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { InputAdornment, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import { ICountryInfo } from '../../common/interfaces/countryInterfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    title: {
      // textAlign: 'center',
      // marginBottom: theme.spacing(1),
    },
    inputsWrap: {
      padding: theme.spacing(3),
    },
    input: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    inputFirst: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    inputName: {},
  }),
);

interface IProps {
  info: ICountryInfo;
}

export default function Exchange({ info }: IProps) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [sum, setSum] = useState('1');

  return (
    <section className={classes.root}>
      <Paper className={classes.inputsWrap} elevation={3}>
        <Typography className={classes.title} variant='h6'>
          {t('exchange')}
        </Typography>
        <TextField
          className={classes.inputFirst}
          value={sum}
          onChange={(e) => setSum(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment className={classes.inputName} position='start'>
                {info.currenciesSymbol}
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment className={classes.inputName} position='start'>
                {info.currenciesCode}
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className={classes.input}
          value={+sum * info.rates.USD || ''}
          InputProps={{
            startAdornment: (
              <InputAdornment className={classes.inputName} position='start'>
                $
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment className={classes.inputName} position='start'>
                USD
              </InputAdornment>
            ),
            readOnly: true,
          }}
        />
        <TextField
          className={classes.input}
          value={+sum * info.rates.EUR || ''}
          InputProps={{
            startAdornment: (
              <InputAdornment className={classes.inputName} position='start'>
                €
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment className={classes.inputName} position='start'>
                EUR
              </InputAdornment>
            ),
            readOnly: true,
          }}
        />
        <TextField
          className={classes.input}
          value={+sum * info.rates.RUB || ''}
          InputProps={{
            startAdornment: (
              <InputAdornment className={classes.inputName} position='start'>
                ₽
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment className={classes.inputName} position='start'>
                RUB
              </InputAdornment>
            ),
            readOnly: true,
          }}
        />
      </Paper>
    </section>
  );
}
