import React, {ChangeEvent} from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {uploadImage} from '../../api/services/imageService'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // '& > *': {
      //   margin: theme.spacing(1),
      // },
      position: 'absolute',
      left: theme.spacing(2),
      top: theme.spacing(2),
    },
    input: {
      display: 'none',
    },
  }),
);

interface IProps {
  onAddImg: (url: string) => void;
}

export default function ButtonAddImage({onAddImg}: IProps) {
  const classes = useStyles();

  const idName = (Math.random() + Math.random()).toString();

  const fileHandler = async (e: any) => {
    const url = await uploadImage(e.target.files[0]);
    onAddImg(url);
  }

  return (
    <div className={classes.root}>
      <input accept="image/*" className={classes.input} id={idName} type="file" onChange={fileHandler}/>
      <label htmlFor={idName}>
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera/>
        </IconButton>
      </label>
    </div>
  );
}
