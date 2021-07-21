import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types"
import './style.css'

const useStyles = makeStyles({
  
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function MediaCard({image,title,paragraph}) {
  const classes = useStyles();
return(

          <Card    id ="card" className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {paragraph}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        
  
)

}

MediaCard.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  paragraph: PropTypes.string,
}

MediaCard.defaultProps = { }

export default MediaCard