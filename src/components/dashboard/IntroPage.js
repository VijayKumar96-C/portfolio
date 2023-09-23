import React from "react";
import "../../style.css"
import { Button } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const InrtoPage = () => {

    return (
        <div className="content">
            <h1 className="name" >Vijay Kumar</h1>
            <p>
                Hi, I am Web developer, Coding with passion, crafting Digital wonders.
            </p>
            <div className="resume" >
            <Button variant="outlined" startIcon={<DescriptionIcon />}>
                Resume
            </Button>
            </div>
            <KeyboardArrowDownIcon className="downIcon" sx={{ fontSize: 80 }} />
        </div>
    )
}

export default InrtoPage