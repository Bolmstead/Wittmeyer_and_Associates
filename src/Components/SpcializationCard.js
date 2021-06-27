import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import NavigationBarHome from './NavigationBarHome'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(() => ({
  specializationsCard:{
    backgroundColor: "white",
    height: "225px",
    width: "225px",
    borderRadius: "0px"

  },
  title:{
    marginTop: "110px",
    color: "white",
    
  },
  overlay: {
    zIndex: 1,
    height: "225px",
    width: "225px",
    backgroundSize: "cover",
    background: "rgba(0, 0, 0, 0.5)"
  },
}));

export default function Specializations({title, pic}) {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={4} md={3} align="center" justify="center">
        <Card className={classes.specializationsCard} 
            align="center" 
            justify="center"
            style={{ 
                backgroundImage: `url(/images/business.jpg)`,     
                backgroundSize: "cover",
            }}>
            <div className={classes.overlay}>
            <Typography variant="body1" component="p" className={classes.title}>
                {title}
            </Typography>
            </div>
        </Card>
    </Grid>

  );
}