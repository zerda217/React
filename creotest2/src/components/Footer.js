import React, { Component } from 'react';
import Button from './Button';

export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="FotterUp">
                    Contact us with
                    your challenge
                    <h1>버튼 들어가줘</h1>
                    <Button></Button>
                </div>
                <div className="FooterDown">
                    로고2
                </div>
                {/* <div>© CREO KOREA all right reseved</div> */}
            </div>
        )
    }
}
