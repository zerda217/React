import React, { Component } from 'react'
import Title from './Title';

export default class Contact extends Component {

    render() {    
        return (
            <div>
                <Title name = "CONTACT"/>
                <h4>CREOKOREA
                    <p>Hyundai Terrace Tower W1402</p>
                    <p>7, Yeonmujang 5ga-gil,</p> 
                    <p>Seongdong-gu, Seoul, Republic of Korea</p></h4>
                <p>Your Name : <input className="Name" type="text" alter="name"/></p>
                <p>Phone<input className="Phone" type="text" alter="Phone"/></p>
                <p>E-mail : <input className="Email" type="text" alter="email"/></p>
                <p>Organization<input className="Organization" type="text" alter="Organization"/></p>
                <p>Message<input className="Message" type="box" alter="Message"/></p>
            </div>
        )
    }
}
