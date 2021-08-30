import React from 'react';
import Button from './Button';

export default function Footer () {
        return (
            <div className="Footer">
                <div className="FooterUp">
                    Contact us with
                    your challenge
                    <div><Button onClick></Button></div>
                </div>
                <div className="FooterDown">
                    로고2
                    <div>
                    <div>대표 : 김홍범 / 서울특별시 성동구 연무장 5가길 7</div>
                    <div>TEL : 02-4321-432</div>
                    <div>개인정보취급방침</div>
                    <div>사업자등록번호 :</div>
                    <div>대표메일 : hb.kim@creokorea.com</div>
                    <div></div>
                 </div>
                    <div>© CREO KOREA all right reseved</div>
                </div>               
            </div>
        );
    }
