import React, { useState } from 'react';
import Title from './Title';
import './Components.scss';

function Contact () {

    const [ name, setName ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ organization, setOrganization ] = useState("");
    const [ message, setMessage ] = useState("");

    const onClick = () => {
        alert( "name: " + name + "/ phone: " + phone + "/ email: " + email + "/ organization: " + organization + "/ message: " + message )
    }

        return (
            <div className = "contact">
                <Title name = "CONTACT"/>
                <h4>CREOKOREA</h4>
                    <p>Hyundai Terrace Tower W1402</p>
                    <p>7, Yeonmujang 5ga-gil,</p> 
                    <p>Seongdong-gu, Seoul, Republic of Korea</p>
                <h4>HOW CAN WE HELP YOU?</h4>
                <div className="form">
                    name:
                    <input className="box" type="text" value={name} 
                    onChange={({ target: {value}}) => setName(value)}/>
                    phone: 
                    <input className="box" type="text" value={phone} 
                    onChange={({ target: {value}}) => setPhone(value)}/>
                    email:
                    <input className="box" type="text" value={email} 
                    onChange={({ target: {value}}) => setEmail(value)}/>
                    organization:
                    <input className="box" type="text" value={organization} 
                    onChange={({ target: {value}}) => setOrganization(value)}/>
                    message:
                    <input className="message" type="text" value={message} 
                    onChange={({ target: {value}}) => setMessage(value)}/>
                    <button className="submit" onClick={onClick}>submit</button>
                </div>
            </div>
        )
    }

export default Contact;