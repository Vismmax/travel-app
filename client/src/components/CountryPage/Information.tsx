import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Section from "./Section";

function getUrlFlag(code: string, width: number = 80): string {
  return `https://flagcdn.com/w${width}/${code}.png`
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    h1: {
      fontSize: theme.typography.h4.fontSize,
      [theme.breakpoints.up('sm')]: {
        fontSize: theme.typography.h3.fontSize,
      },
    },
    subheaderH1: {},
    avatar: {
      backgroundColor: red[500],
    },
    flag: {
      display: 'none',
      width: 80,
      height: 53,
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    }
  }),
);

export default function Information() {
  const classes = useStyles();

  return (
    <Section>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              variant="rounded"
              aria-label="recipe"
              alt="Португалия"
              src={getUrlFlag('pt')}
              className={classes.flag}
            />
          }
          title={
            <Typography variant="h3" component="h1" className={classes.h1}>
              Португалия
            </Typography>
          }
          subheader={
            <Typography gutterBottom>
              <span>Столица: </span>
              <Typography variant="h5" component="span" gutterBottom className={classes.subheaderH1}>
                Лиссабон
              </Typography>
            </Typography>
          }
        />
        <CardMedia
          className={classes.media}
          image="/img/port.jpg"
          title="Португалия"
        />
        <CardContent>
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
          <Typography color="textPrimary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </Section>

  );
}
