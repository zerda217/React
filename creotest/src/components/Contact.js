import React, { Component } from 'react'
import Title from './Title';

export default class Contact extends Component {

    state = { name: '', phone: '', email: '', organization: '', message: '' };

    handleChange = (e) => {
        this.setState({ name: e.target.value, phone: e.target.value, email: e.target.value, organization: e.target.value, message: e.target.value });
    }

    handleClick = () => {
        const { name, phone, email, organization, message } = this.state;
            alert(name + ' ' + phone + ' ' + email + ' ' + organization + ' ' + message);
            this.setState({ name: '', phone: '', email: '', organizatio: '', message: '' })
    }

    render() {
        const { name, phone, email, organization, message } = this.state;
        const { handleChange, handleClick } = this;
        return (
            <div className = "contact">
                <Title name = "CONTACT"/>
                <h4>CREOKOREA</h4>
                    <p>Hyundai Terrace Tower W1402</p>
                    <p>7, Yeonmujang 5ga-gil,</p> 
                    <p>Seongdong-gu, Seoul, Republic of Korea</p>
                <h4>HOW CAN WE HELP YOU?</h4>
                <ul>
                    <div className="li">
                        <div className="li1">Your Name </div>
                        <div className="li1"><input className="box" type="text" alter="name"
                            value={name} onChange={handleChange}/></div>
                    </div>
                    <div className="li">
                        <div className="li2">Phone </div>
                        <div className="li2"><input className="box" type="text" alter="Phone"
                        value={phone} onChange={handleChange}/></div>
                    </div>
                    <div className="li">
                        <div className="li3">E-mail</div>
                        <div className="li3"><input className="box" type="text" alter="email"
                        value={email} onChange={handleChange}/></div>
                    </div>
                    <div className="li">
                        <div className="li4">Organization</div>
                        <div className="li4"><input className="box" type="text" alter="Organization"
                        value={organization} onChange={handleChange}/></div>
                    </div>
                    <div className="li">
                        <div className="li5">Message </div>
                        <div className="li5"><textarea className="text" type="box" alter="Message"
                        value={message} onChange={handleChange}/></div>
                    </div>
                </ul>
                {/* <p>Your Name 
                    <input className="box" type="text" alter="name"
                        value={name} onChange={handleChange}/></p>
                <p>Phone 
                    <input className="box" type="text" alter="Phone"
                        value={phone} onChange={handleChange}/></p>
                <p>E-mail 
                    <input className="box" type="text" alter="email"
                        value={email} onChange={handleChange}/></p>
                <p>Organization 
                    <input className="box" type="text" alter="Organization"
                        value={organization} onChange={handleChange}/></p>
                <p>Message 
                    <textarea className="text" type="box" alter="Message"
                        value={message} onChange={handleChange}/></p> */}
                <button type="submit" onClick={handleClick}>Submit</button>
            </div>
        )
    }
}
