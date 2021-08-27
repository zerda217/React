import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import About from './components/About';
import Creo from './components/Creo';
import Contact from './components/Contact';
import Works from './components/Works';
import Careers from './components/Careers';
// import PageTemplate from './components/PageTemplate';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="App_header">
            <img className="headerlogo" src="https://blog.creokorea.com//uploads/l_f77a7d016b.png" alt="logo"/>
            <div className="nav">             
                <Link to="/components/About">ABOUT</Link>
                <Link to="/components/Creo">CREO</Link>
                <Link to="/components/Works">WORKS</Link>
                <Link to="/components/Careers">CAREERS</Link>
                <Link to="/components/Contact">CONTACT</Link>             
            </div>
            </div>
      <div className="Body">
        {/* <About/> */}
        <hr/>
            <Route path="/" exact={true} component={About} />
            <Route path="/components/Creo" component={Creo} />
            <Route path="/components/Works" component={Works} />
            <Route path="/components/Careers" component={Careers} />
            <Route path="/components/Contact" component={Contact} />
      </div>
    <Footer/>
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
        //     
  );
}

export default App;
