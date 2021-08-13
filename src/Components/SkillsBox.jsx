import React from 'react';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import css from "../Images/CSS.png"
import html from "../Images/HTML.png"
import react from "../Images/react.png"
import "./SkillBox.css"
import js from "../Images/JS.png"
import sass from "../Images/sass.png"
import bootstrap from "../Images/bootstrap.png"
import webpack from "../Images/webpack.svg"
import es6 from "../Images/es6.svg"
import node from  "../Images/node.png"
import ex from "../Images/ex.png"


const SkillsBox = () => {
    return (
        <Box p={2} m={2}>
            <Typography align={"center"} color={"primary"} variant={"h4"}>
                Skills:
                <Box className="skillBox" m={2}>
                    <Button variant={"contained"} color={"primary"}
                            onClick={() => document.location.assign("https://ru.wikipedia.org/wiki/CSS")}>
                        <img  src={css} alt="cssImage"/>
                        CSS</Button>
                    <Button variant={"contained"} color={"primary"}
                            onClick={() => document.location.assign("https://ru.wikipedia.org/wiki/HTML5")}>
                        <img  src={html} alt="HTML5"/>
                        HTML</Button>
                    <Button variant={"contained"} color={"primary"}
                            onClick={() => document.location.assign("https://ru.reactjs.org/")}>
                        <img  src={react} alt="ReactLogo"/>
                        React</Button>
                    <Button variant={"contained"} color={"primary"}
                            onClick={() => document.location.assign("https://sass-lang.com/")}>
                        <img src={sass} alt="sas" />
                        SASS</Button>
                    <Button variant={"contained"} color={"primary"}
                            onClick={() => document.location.assign("https://learn.javascript.ru/")}>
                        <img src={js} alt="js" />
                        JavaScript</Button>
                    <Button variant={"contained"} color={"primary"}
                            onClick={() => document.location.assign("https://getbootstrap.com/")}>
                        <img src={bootstrap} alt="bootstrap"/>
                        Bootstrap</Button>
                    <Button variant={"contained"} color={"primary"}
                            onClick={() => document.location.assign("https://webpack.js.org/")}>
                        <img src={webpack} alt="webpack"/>
                        WebPack</Button>
                    <Button variant={"contained"} color={"primary"}
                            onClick={() => document.location.assign("https://ru.wikipedia.org/wiki/ECMAScript")}>
                        <img src={es6} alt="es6"/>
                        ES6</Button>
                    <Button variant={"contained"} color={"primary"}
                            onClick={() => document.location.assign("https://nodejs.org/en/")}>
                        <img src={node} alt="node"/>
                        Node.JS</Button>
                    <Button variant={"contained"} color={"primary"}
                            onClick={() => document.location.assign("https://expressjs.com/")}>
                        <img src={ex} alt="ex"/>
                        Express</Button>
                </Box>
            </Typography>
        </Box>
    );
};

export default SkillsBox;