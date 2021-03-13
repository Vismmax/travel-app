import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from "@material-ui/core/Button";
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    }
  }),
);

export default function Language() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <select className={classes.select}  name="language" id="language">
        <option value="ru">Русский</option>
        <option value="en">English</option>
        <option value="ch">日本語</option>
      </select>
      <Button
        aria-label="Change language"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        startIcon={<TranslateIcon />}
        endIcon={<ExpandMoreIcon/>}
      >
        <span className={classes.language}>Русский</span>
      </Button>
      <Menu
        id="menu-language"
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
        <MenuItem onClick={handleClose}>Русский</MenuItem>
        <MenuItem onClick={handleClose}>English</MenuItem>
        <MenuItem onClick={handleClose}>日本語</MenuItem>
      </Menu>
    </div>
  );
}
