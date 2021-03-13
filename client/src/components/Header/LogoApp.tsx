import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import {ReactComponent as logoIcon} from '../../assets/logo.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logoButton: {
      marginLeft: -12,
    },
    logo: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      textTransform: 'capitalize',
      whiteSpace: 'nowrap',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  }),
);

export default function LogoApp() {
  const classes = useStyles();

  return (
    <Button
      className={classes.logoButton}
      classes={{
        startIcon: classes.logo
      }}
      startIcon={<SvgIcon className="header-logo" component={logoIcon} viewBox="0 0 512 512"/>}
      size="large"
      color="inherit"
      component={RouterLink}
      to="/"
    >
      <Typography variant="h5" className={classes.title}>
        Travel App
      </Typography>
    </Button>
  );
}
