import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CodeIcon from '@material-ui/icons/Code';

export default function RightMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const clickOne=()=>{
        handleClose()
        document.location.assign("https://github.com/matus1888/clonoOf2048")
    }
    const clickTwo=()=>{
        handleClose()
        document.location.assign("https://github.com/matus1888/calc")
    }
    const clickThree=()=>{
        handleClose()
        document.location.assign("https://github.com/matus1888/workspace")
    }

    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            <Button style={{color:"white"}} variant={"text"} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {"<CODE PROJECTS>"}
            </Button>
            <Menu className={"menu"}
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
            >
                <MenuItem onClick={clickOne}><CodeIcon style={{marginRight:"8px"}} />2048</MenuItem>
                <MenuItem onClick={clickTwo}><CodeIcon style={{marginRight:"8px"}} /> Калькулятор</MenuItem>
                <MenuItem onClick={clickThree}><CodeIcon style={{marginRight:"8px"}} />Блог</MenuItem>
            </Menu>
        </div>
    );
}
