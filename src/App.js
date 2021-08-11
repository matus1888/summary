import './App.css';
import React, {useEffect} from "react";
import Box from "@material-ui/core/Box"
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import AppCard from "./Components/AppCard";
import blueGrey from "@material-ui/core/colors/blueGrey";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ava from "./Images/ava.jpg"
import MenuItem from "@material-ui/core/MenuItem";
import GetAppIcon from '@material-ui/icons/GetApp';


const useStyles = makeStyles((theme) => {
    return {
        toolbar: {
            color:blueGrey["100"],
            zIndex: 0,
        },
        menuItem:{
          display: "flex",
            justifyContent: "center",
        },
        gridItem: {
            textAlign: "center",
        },
    }
});

function App() {

    const [isMobile,setIsMobile]=React.useState(window.screen.availWidth<992?true:false)
    const listenerSize=()=> setIsMobile(window.screen.availWidth < 992 ? true : false)

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    let gridSize=isMobile?12:4
    let paddingSize=isMobile?2:4
    useEffect(()=> {
        window.addEventListener("resize",listenerSize )
        return ()=> {
            window.removeEventListener("resize", listenerSize)
        }
    })

    return (
        <>
            <div className={"root"}>
            <div>
                <div className={"wrapper"}>
                    <div className={"background"}>
                        <div>
                            <Box color={"text.primary"} className={"nameBox"} p={paddingSize}>
                                <Typography align={"left"} className={'name'} style={{color: "white"}} variant={"h5"}>Matusew
                                    Alexandr
                                    <Typography variant={"body2"}>frontend developer</Typography>
                                </Typography>
                            </Box>
                            <Box className={"button"} p={paddingSize}>
                                <Button size={"small"} variant={"contained"} color={"primary"}>
                                    <GetAppIcon/>Download my resume
                                </Button>
                            </Box>
                            <Box className={"mail"} p={paddingSize}>
                                <Typography variant={"body2"} style={{color: "white"}}>
                                    matus1888@gmail.com
                                </Typography>
                            </Box>
                            <Box className={"avatar"}>
                                <Avatar  className={`circle large`}>
                                    <img src={ava} className={"large"} alt="avatar"/>
                                </Avatar>
                            </Box>
                        </div>
                    </div>
                </div>
                <AppBar position={"sticky"}  className={classes.toolbar}>
                    <Toolbar>
                        <Grid container spacing={3}>
                            <Grid item className={classes.gridItem} xs={4}>
                              <MenuItem className={classes.menuItem} button>Menu one</MenuItem>
                            </Grid>
                            <Grid item className={classes.gridItem} xs={4}></Grid>
                            <Grid item className={classes.gridItem} xs={4}>
                               <MenuItem className={classes.menuItem} button>Menu two</MenuItem>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <div style={{backgroundColor:"rgba(128,128,128,0.8)"}}>
                    <Grid container spacing={2} className={"wrapper2"}>
                        <Grid item xs={gridSize}>
                            <AppCard title={"Образование"}/>
                        </Grid>
                        <Grid item xs={gridSize}>
                            <AppCard title={"Навыки"}  />
                        </Grid>
                        <Grid item xs={gridSize}>
                            <AppCard title={"Опыт"} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={"wrapper2"}>
                        <Grid item xs={gridSize}>
                            <AppCard title={"Технологии"}/>
                        </Grid>
                        <Grid item xs={gridSize}>
                            <AppCard title={"Проекты"} />
                        </Grid>
                    </Grid>
                </div>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                >
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                </BottomNavigation>
            </div>
        </div>
        </>
    );
}

export default App;
