import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <h6>크레오 컨택</h6>
                Name : <input className="Name" type="text" alter="name"/>
                E-mail : <input className="Email" type="text" alter="email"/>
            </div>
        )
    }
}
