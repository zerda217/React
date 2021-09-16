import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { Home, About, Creo, Works, Careers, Contact2 } from './components';
// import Footer from './components/Footer';
import Button from './components/Button';

const App = () => {
//   const toggleBtn = document.querySelector('.nav_toggleBtn');
//   const menu = document.querySelector('.nav');

// toggleBtn.addEventListener('click', () => {
// menu.classList.toggle('active');
// });

  return (
    <div className="creo">
      <div className="body">
      <div className="wrap">
      <div className="App_header">
        <Link to="/">
        <img className="headerlogo" src="https://blog.creokorea.com//uploads/l_f77a7d016b.png" alt="logo"/></Link>
          <ul className="nav">             
            <li className="nav_li"><Link to="/components/About">ABOUT</Link></li>
            <li className="nav_li"><Link to="/components/Creo">CREO</Link></li>
            <li className="nav_li"><Link to="/components/Works">WORKS</Link></li>
            <li className="nav_li"><Link to="/components/Careers">CAREERS</Link></li>
            <li className="nav_li"><Link to="/components/Contact2">CONTACT</Link></li>         
          </ul>
          <Link to="#" className="nav_toggleBtn">o</Link>
      </div>
        <div className="Main">
          <hr/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/components/About" component={About} />
            <Route path="/components/Creo" component={Creo} />
            <Route path="/components/Works" component={Works} />
            <Route path="/components/Careers" component={Careers} />
            <Route path="/components/Contact2" component={Contact2} />
            <Route path="/"> Not Found </Route>
          </Switch>
        </div>
      <div className="Footer">
        <div className="FooterUp">
          Contact us with<br/>
          your challenge
          <h6>크레오 코리아 관련 제품 및 기타 궁금하신 점을 해결해 드립니다.</h6>
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
      </div>
    </div>
  </div>   
  );
}

export default App;