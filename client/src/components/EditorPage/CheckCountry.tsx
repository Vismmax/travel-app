import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { checkCountry } from '../../api/services/countryService';
import Typography from '@material-ui/core/Typography';
import { setCountryInfo } from './editorSlice';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    check: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(5),
    },
    input: {
      flexGrow: 1,
    },
  }),
);

interface Props {
  onCheck: () => void;
}

export default function CheckCountry({ onCheck }: Props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [textError, setTextError] = useState('');

  const handleChangeValue = (ev: any) => {
    setValue(ev.target.value);
    setTextError('');
    setError(false);
  };

  const handleClickCheck = async () => {
    const result = await checkCountry(value);
    if (!result.isExist) {
      setTextError(t('editor.notExist'));
      setError(true);
      return;
    }
    if (result.isExistDB) {
      setTextError(t('editor.existinDB'));
      setError(true);
      return;
    }
    console.log(result.info);
    onCheck();
    dispatch(setCountryInfo(result.info));
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Typography variant='h5' align={'center'}>
          {t('editor.nameInEN')}
        </Typography>
        <div className={classes.check}>
          <TextField
            className={classes.input}
            label={t('country')}
            value={value}
            onChange={handleChangeValue}
            error={error}
            helperText={textError}
          />
          <Button onClick={handleClickCheck}>{t('editor.check')}</Button>
        </div>
      </Paper>
    </div>
  );
}
