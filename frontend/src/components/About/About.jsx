import React from 'react';
import "./About.css";
import {Typography} from "@mui/material";
// import images from "../../Image/avatar.png"
 

const About = ({about}) => {
  return (
    <div className='about'>
        <div className="aboutContainer">
            <Typography>{about.quote}</Typography>
        </div>
        <div className="aboutContainer1">
            <div>
                <img src={about.avatar.url} alt="" className='aboutAvatar' />
                <Typography style={{marginTop: "1vmax", color: "black"}} variant='h4'>{about.name}</Typography>
                <Typography>{about.title}</Typography>
                <Typography>{about.subtitle}</Typography>
            </div>
            <div>
                <Typography style={{wordSpacing: "5px", lineHeight: "50px", letterSpacing: "5px", textAlign:"right"}}>
                     {about.description}
                </Typography>
            </div>
        </div>
    </div>
  )
}

export default About