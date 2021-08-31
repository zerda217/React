import React, { Component } from 'react'
import Title from './Title';

export default class Contact extends Component {

    state = { name: '', phone: '', email: '', organization: '', message: '' };

    handleChange = (e) => {
        this.setState({ name: e.target.value, phone: e.target.value, email: e.target.value, organization: e.target.value, message: e.target.value });
    }

    handleClick = () => {
        alert(this.state.name + ' ' + this.state.phone + ' ' + this.state.email + ' ' + this.state.organization + ' ' + this.state.message);
        this.setState({ name: '', phone: '', email: '', organizatio: '', message: '' })
    }

    render() {    
        return (
            <div>
                <Title name = "CONTACT"/>
                <h4>CREOKOREA
                    <p>Hyundai Terrace Tower W1402</p>
                    <p>7, Yeonmujang 5ga-gil,</p> 
                    <p>Seongdong-gu, Seoul, Republic of Korea</p></h4>
                <p>Your Name : 
                    <input className="name" type="text" alter="name"
                        value={this.state.name} onChange={this.handleChange}/></p>
                <p>Phone :
                    <input className="phone" type="text" alter="Phone"
                        value={this.state.phone} onChange={this.handleChange}/></p>
                <p>E-mail : 
                    <input className="email" type="text" alter="email"
                        value={this.state.email} onChange={this.handleChange}/></p>
                <p>Organization : 
                    <input className="organization" type="text" alter="Organization"
                        value={this.state.organization} onChange={this.handleChange}/></p>
                <p>Message 
                    <input className="message" type="box" alter="Message"
                        value={this.state.message} onChange={this.handleChange}/></p>
                <button type="submit" onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}
