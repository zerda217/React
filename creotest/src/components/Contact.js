import React, { Component } from 'react'
import Title from './Title';

export default class Contact extends Component {

    render() {    
    const { title } = this.props;
        return (
            <div>
                <Title/>
                <h1>크레오 컨택</h1>
                Name : <input className="Name" type="text" alter="name"/>
                E-mail : <input className="Email" type="text" alter="email"/>
            </div>
        )
    }
}
