import React, { useState } from 'react'

function About () {

    const [ name, setName ] = useState("");
    const [ phone, setPhone ] = useState("");

    const onClick = () => {
        alert( "name: " + name + "/ phone: " + phone )
    }

        return (
            <div>
                <h1>ABOUT</h1>
                name:
                <input type="text" value={name} 
                onChange={({ target: {value}}) => setName(value)}/>
                phone: 
                <input type="text" value={phone} 
                onChange={({ target: {value}}) => setPhone(value)}/>
                <button onClick={onClick}>submit</button>
            </div>
        )
    }

export default About;