import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Languages } from '../../common/enums/languages';
import { setLang, langStore } from '../common/commonSlice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    select: {
      position: 'absolute',
      opacity: 0,
      zIndex: -1,
    },
    language: {
      overflow: 'hidden',
      width: 0,
      marginLeft: -8,
      marginRight: -8,
      // display: 'none',
      [theme.breakpoints.up('sm')]: {
        // display: 'inline',
        width: 'auto',
        marginLeft: 0,
        marginRight: 0,
      },
    },
  }),
);

interface IEv {
  target: {
    value: string;
  };
}

export default function Language() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const lang = useSelector(langStore);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeSelect = (ev: IEv) => {
    dispatch(setLang(ev.target.value as Languages));
    // i18n.changeLanguage(ev.target.value);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    lng: Languages,
  ) => {
    dispatch(setLang(lng));
    i18n.changeLanguage(lng);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <select
        className={classes.select}
        name='language'
        id='language'
        onChange={handleChangeSelect}
        value={lang}
      >
        {Object.values(Languages).map((lng, id) => (
          <option key={id} value={lng}>
            {t(`lang.${lng}`)}
          </option>
        ))}
      </select>
      <Button
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleMenu}
        color='inherit'
        startIcon={<TranslateIcon />}
        endIcon={<ExpandMoreIcon />}
      >
        <span className={classes.language}>{t(`lang.${lang}`)}</span>
      </Button>
      <Menu
        id='menu-language'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        {Object.values(Languages).map((lng, id) => (
          <MenuItem
            key={id}
            onClick={(event) => handleMenuItemClick(event, lng)}
          >
            {t(`lang.${lng}`)}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
