import { Typography } from '@mui/material';
import React from 'react';
import "./Footer.css";
import {Link} from "react-router-dom";
import { BsLinkedin,BsFacebook,BsInstagram, BsGithub, } from "react-icons/bs";
function Footer() {
  return (
    <div className='footer'>
        <div>
            <Typography variant='h5'>About Me</Typography>
            <Typography>Hey, my name is sonu kumar mahto. I am a Full-Stack Developer and a tutorial youtube channel called <b> Sonu kumar </b></Typography>
            <Link to="/contact" className='footerContactBtn'>
                <Typography>Contact Us</Typography>
            </Link>
        </div>
        <div>
          <Typography variant='h6'>Social Media</Typography>
          <a href="https://github.com/skmpandit" target="blank">
            <BsGithub/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100015116558924" target="blank" >
            <BsFacebook/>
          </a>
          <a href="https://www.instagram.com/sk3001057/" target="blank">
            <BsInstagram/>
          </a>
          <a href="https://www.linkedin.com/in/sonu-kumar-mahto-7a2342206/" target="blank">
            <BsLinkedin/>
          </a>
        </div>
    </div>
  )
}

export default Footer