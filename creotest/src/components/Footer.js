import React, { Component } from 'react';
import Button from './Button';

export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="FotterTop">
                    <Button>Contact Us</Button>
                </div>
                <div className="FooterUnder">
                    로고2
                </div>
            </div>
        )
    }
}
