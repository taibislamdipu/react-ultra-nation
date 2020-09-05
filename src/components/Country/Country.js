import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const divStyle = {

    alignItems: 'center',
    marginLeft: '50px'
}

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


const Country = (props) => {

    console.log(props);
    const { name, flag } = props.country;
    const classes = useStyles();


    return (
        <div style={divStyle}>

            <Card className={classes.root} >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={flag}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae at pariatur, quos quia repudiandae ullam ratione facere amet veritatis totam.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>

                    <Link to={`/country/${name}`}>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </Link>

                    <Button size="small" color="primary" onClick={() => alert('Share option coming soon!')}>
                        Share
                    </Button>

                </CardActions>
            </Card>
            <br />

        </div >
    );
};

export default Country;