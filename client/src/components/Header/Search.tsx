import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import InputBase from '@material-ui/core/InputBase';
import {
  createStyles,
  fade,
  Theme,
  makeStyles,
} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { setSearch, searchStore } from '../common/commonSlice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // search: {
    //   position: 'relative',
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    //   borderRadius: theme.shape.borderRadius,
    //   backgroundColor: fade(theme.palette.common.white, 0.15),
    //   '&:hover': {
    //     backgroundColor: fade(theme.palette.common.white, 0.25),
    //   },
    //   // marginLeft: 0,
    //   width: '100%',
    //   [theme.breakpoints.up('sm')]: {
    //     // marginLeft: theme.spacing(1),
    //     width: 'auto',
    //     // width: '50%',
    //   },
    // },
    // searchIcon: {
    //   padding: theme.spacing(0, 2),
    //   height: '100%',
    //   position: 'absolute',
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   cursor: 'pointer',
    //   zIndex: 1,
    // },
    // clearIcon: {
    //   padding: theme.spacing(0, 2),
    //   height: '100%',
    //   position: 'absolute',
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   cursor: 'pointer',
    //   right: -theme.spacing(1),
    //   top: 0,
    // },
    // inputRoot: {
    //   color: 'inherit',
    // },
    // inputInput: {
    //   padding: theme.spacing(1, 1, 1, 0),
    //   // vertical padding + font size from searchIcon
    //   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    //   transition: theme.transitions.create('width'),
    //   width: '100%',
    //   [theme.breakpoints.up('sm')]: {
    //     width: '12ch',
    //     '&:focus': {
    //       width: '20ch',
    //     },
    //   },
    //   [theme.breakpoints.up('md')]: {
    //     width: '22ch',
    //     '&:focus': {
    //       width: '32ch',
    //     },
    //   },
    // },

    search: {
      position: 'relative',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: 'auto',
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: 1,
    },
    clearIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      right: -theme.spacing(1),
      top: 0,
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }),
);

interface IEv {
  target: {
    value: string;
  };
}

export default function Search() {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const search = useSelector(searchStore);
  const location = useLocation();

  const handleChange = (ev: IEv) => {
    dispatch(setSearch(ev.target.value));
  };

  const handleClickSearch = () => {
    dispatch(setSearch(search));
    console.log('Click Search');
  };

  const handleClearSearch = () => {
    dispatch(setSearch(''));
  };

  return (
    <div className={classes.search}>
      {location.pathname === '/home' && (
        <>
          <div className={classes.searchIcon}>
            <SearchIcon onClick={handleClickSearch} />
          </div>
          <InputBase
            placeholder={t('search')}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            value={search}
            onChange={handleChange}
          />
          {search && (
            <div className={classes.clearIcon}>
              <ClearIcon onClick={handleClearSearch} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
