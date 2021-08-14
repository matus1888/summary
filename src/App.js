import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import MailIcon from '@material-ui/icons/Mail';
import './App.css';
import React, {useEffect} from "react";
import Box from "@material-ui/core/Box"
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AppCard from "./Components/AppCard";
import ava from "./Images/ava2.jpg"
import GetAppIcon from '@material-ui/icons/GetApp';
import {myData} from "./Components/myInfo";
import LeftMenu from "./Components/LeftMenu";
import RightMenu from "./Components/RightMenu";
import SkillsBox from "./Components/SkillsBox";
import AppBar from '@material-ui/core/AppBar';
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import blue from "@material-ui/core/colors/blue"
import green from "@material-ui/core/colors/green";


function App() {

    const [isMobile, setIsMobile] = React.useState(window.screen.availWidth < 992 ? true : false)
    const listenerSize = () => setIsMobile(window.screen.availWidth < 992 ? true : false)

    let gridSize = isMobile ? 12 : 4
    let paddingSize = isMobile ? 2 : 4
    useEffect(() => {
        window.addEventListener("resize", listenerSize)
        return () => {
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
                                    <Typography align={"left"} className={'name'} style={{color: "white"}}
                                                variant={"h5"}>Matusev
                                        Alexander
                                        <Typography variant={"body2"}>frontend developer</Typography>
                                    </Typography>
                                </Box>
                                <Box className={"button"} p={paddingSize}>
                                    <Button onClick={()=>window.open("/summary/resume.pdf", '_blank')}
                                        size={"small"} variant={"contained"} color={"primary"}>
                                        <GetAppIcon/>Download my resume
                                    </Button>
                                </Box>
                                <Box className={"mail"} p={paddingSize}>
                                    <Typography variant={"body2"} style={{color: "white"}}>
                                        matus1888@gmail.com
                                    </Typography>
                                </Box>
                                <Box className={"avatar"}>
                                    <Avatar
                                        onClick={()=>document.location.assign("https://t.me/matus1888")}
                                        className={`circle large`}>
                                        <img src={ava} className={"large"} alt="avatar"/>
                                    </Avatar>
                                </Box>
                            </div>
                        </div>
                    </div>
                    <AppBar className={"appStickyBar"} position={"sticky"}>
                        <Grid container spacing={3}>
                            <Grid  item  xs={4}>
                                <LeftMenu ></LeftMenu>
                            </Grid>
                            <Grid item  xs={4}></Grid>
                            <Grid item xs={4}>
                                <RightMenu ></RightMenu>
                            </Grid>
                        </Grid>
                    </AppBar>
                    <SkillsBox />
                    <div style={{backgroundColor: "rgba(128,128,128,0.8)"}}>
                        <Grid container spacing={2} className={"wrapper2"}>
                            {myData.map((item, index) => (<Grid key={item.title + index} item xs={gridSize}>
                                    <AppCard title={item.title} data={item}/>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
            </div>
            <footer style={{backgroundColor:"rgba(128,128,128,0.8)"}} >
                <Container style={{display:"flex", justifyContent:"center"}}>
                    <Container >
                        <Paper elevation={8} >
                        <Typography style={{textAlign:"center",paddingTop:"10px"}} variant={"h6"}>Ниже приведены контактные данные</Typography>
                        <div style={{display:"flex", justifyContent:"center"}}>
                        <div className={'txtAligner'}>
                            <div><MailIcon fontSize={"large"} /><span> matus1888@gmail.com</span></div>
                            <div onClick={()=>document.location.assign("https://t.me/matus1888")}
                            ><TelegramIcon style={{color:blue[300],cursor:"pointer"}} fontSize={"large"} /><span> @matus1888</span></div>
                            <div onClick={()=>document.location.assign("https://wa.me/+79654748370")}
                            ><WhatsAppIcon style={{color:green[400],cursor:"pointer"}} fontSize={"large"} /><span>+79654748370 </span>
                            </div>
                        </div>
                        </div>
                        </Paper>
                    </Container>
                </Container>
            </footer>
        </>
    );
}

export default App;
