import React, { useState } from 'react';
import Title from './Title';

function Contact2 () {

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
                name:
                <input type="text" value={name} 
                onChange={({ target: {value}}) => setName(value)}/>
                phone: 
                <input type="text" value={phone} 
                onChange={({ target: {value}}) => setPhone(value)}/>
                email:
                <input type="text" value={email} 
                onChange={({ target: {value}}) => setEmail(value)}/>
                organization:
                <input type="text" value={organization} 
                onChange={({ target: {value}}) => setOrganization(value)}/>
                message:
                <input type="text" value={message} 
                onChange={({ target: {value}}) => setMessage(value)}/>
                <button onClick={onClick}>submit</button>
            </div>
        )
    }

export default Contact2;