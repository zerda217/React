import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../App.css';

export default function Footer () {

  return (
    <div className="Footer">
      <div className="FooterUp">
        <h1>Contact us with<br/>
          your challenge</h1>
          <br/>
        <h6>크레오 코리아 관련 제품 및 기타 궁금하신 점을 해결해 드립니다.</h6><br/>
      <div>
        <Link to = "./Contact2">
            <Button/>
        </Link>
      </div>
    </div>
    <div className="FooterDown">
        <img className="FooterLogo" src="https://blog.creokorea.com//uploads/l_f77a7d016b.png" alt="logo"/>
          <span>
              <li className="Footer_li">대표 : 김홍범 / 서울특별시 성동구 연무장 5가길 7</li>
              <li className="Footer_li">대표메일 : hb.kim@creokorea.com</li> 
              <li className="Footer_li">사업자등록번호 : 123-456-789</li>
              <li className="Footer_li">TEL : 02-4321-432</li>
              <li className="Footer_li">개인정보취급방침</li>         
          </span>
          <div className="Copyright">© CREO KOREA all right reseved</div>
        </div>               
        </div>
        );
    }
