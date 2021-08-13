import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./LeftMenu.css"

export default function LeftMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const clickOne=()=>{
        handleClose()
       document.location.assign("https://matus1888.github.io/clonoOf2048/")
    }
    const clickTwo=()=>{
        handleClose()
        document.location.assign("https://matus1888.github.io/calc/")
    }
    const clickThree=()=>{
        handleClose()
        document.location.assign("https://matus1888.github.io/workspace/")
    }

    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <Button  style={{color:"white"}} variant={"text"} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Другие проекты
            </Button>
            <Menu className={"menu"}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={clickOne}><GitHubIcon className={"menuItem"} />2048</MenuItem>
                <MenuItem onClick={clickTwo}><GitHubIcon className={"menuItem"} /> Калькулятор</MenuItem>
                <MenuItem onClick={clickThree}><GitHubIcon className={"menuItem"} />Блог</MenuItem>
            </Menu>
        </div>
    );
}
