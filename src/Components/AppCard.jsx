import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        maxWidth: "auto"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardContent:{
        alignContent:"end",
        display:'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function AppCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                title={props.data.title}
                subheader={props.data.subheader}
            />
            <CardMedia
                className={classes.media}
                image={props.data.image}
                title={props.data.imageTitle}
            />
            <CardContent className={classes.cardContent}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.data.briefContentDescription}
                </Typography>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="Читать целиком"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>{props.data.description}</Typography>
                    <Typography paragraph>
                        {props.data.text.p1}
                    </Typography>
                    <Typography paragraph>
                        {props.data.text.p2}
                    </Typography>
                    <Typography paragraph>
                        {props.data.text.p3}
                    </Typography>
                    <Typography>
                        {props.data.text.p4}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
