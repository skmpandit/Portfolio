import React, { useEffect, useState } from 'react';
import "./Contect.css";
import {Button,Typography} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { contactUs } from '../../actions/user';

function Contect() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading,message: alertMessage, error} = useSelector((state) => state.update);

    const contactFormHandler = (e) => {
        e.preventDefault();
        dispatch(contactUs(name,email,message))
    };

    useEffect(() => {
        if(error) {
            alert.error(error);
            dispatch({ type: "CLEAR_ERRORS"});
        }
        if(alertMessage) {
            alert.success(alertMessage);
            dispatch({ type: "CLEAR_MESSAGE"});
        }
    },[dispatch,alert,alertMessage,error])
  return (
    <div className='contect'>
        <div className="contectRightbar"></div>
        <div className="contactContainer">
            <form className="contactContainerForm" onSubmit={contactFormHandler}>
                <Typography variant='h4'>Contact Us</Typography>
                <input type="text" required placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" required placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea placeholder='Message' required cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <Button variant='contained' type='submit' disabled={loading}>Sent</Button>
            </form>
        </div>
    </div>
  )
}

export default Contect