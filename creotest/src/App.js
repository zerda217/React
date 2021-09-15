import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { Home, About, Creo, Works, Careers, Contact2 } from './components';
// import Footer from './components/Footer';
import Button from './components/Button';

const App = () => {
  return (
    <div className="creo">
      <div className="body">
      <div className="wrap">
      <div className="App_header">
        <Link to="/">
        <img className="headerlogo" src="https://blog.creokorea.com//uploads/l_f77a7d016b.png" alt="logo"/></Link>
          <span className="nav">             
            <Link to="/components/About">ABOUT</Link>
            <Link to="/components/Creo">CREO</Link>
            <Link to="/components/Works">WORKS</Link>
            <Link to="/components/Careers">CAREERS</Link>
            <Link to="/components/Contact2">CONTACT</Link>             
          </span>
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
        <div>
          <Link to = "./Contact2">
              <Button/>
          </Link>
        </div>
      </div>
      <div className="FooterDown">
        <img className="footerlogo" src="https://blog.creokorea.com//uploads/l_f77a7d016b.png" alt="logo"/>
                    <div>
                    <div>대표 : 김홍범 / 서울특별시 성동구 연무장 5가길 7</div>
                    <div>TEL : 02-4321-432</div>
                    <div>개인정보취급방침</div>
                    <div>사업자등록번호 :</div>
                    <div>대표메일 : hb.kim@creokorea.com</div>
                    <div></div>
                 </div>
                    <div className="copyright">© CREO KOREA all right reseved</div>
                </div>               
            </div>
            </div>
            </div>
    {/* <Footer/> */}
  </div>   
  );
}

export default App;