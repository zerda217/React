import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import PageTemplate from './components/PageTemplate';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="Body">
        <PageTemplate></PageTemplate>
      </div>
    <Footer></Footer>
    </div>

//         <div>
// 크레오코리아는 클라이언트의 니즈와 고객의 감성을 충족시키는 UI(사용자 인터페이스)와
//                     긍정적인 UX(사용자경험)설계 경험을 바탕으로 IoT 기술까지 융합된 전문성을 갖추었습니다
//         </div>


        // <div>
        //     <p><h2>Contact us with  your challenge </h2> <h6>크레오 코리아 관련 제품 및 기타 궁금하신 점을 해결해 드립니다.</h6></p>
        // </div>
        // <div>
        //     <div>CREO</div>
        //     <div>
        //         <div>대표 : 김홍범 / 서울특별시 성동구 연무장 5가길 7</div>
        //         <div>TEL : 02-4321-432</div>
        //         <div>개인정보취급방침</div>
        //         <div>사업자등록번호 :</div>
        //         <div>대표메일 : hb.kim@creokorea.com</div>
        //         <div></div>
        //     </div>
        //     <div>© CREO KOREA all right reseved</div>
  );
}

export default App;
