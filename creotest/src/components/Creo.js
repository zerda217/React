import React from 'react';
import { 
        BrowserRouter as Router, 
        Switch, 
        Route, 
        Link, 
        useParams, 
        useRouteMatch } 
        from 'react-router-dom';
import Title from './Title';
import Profile from './Profile';
import Home from './Home';
import Contact from './Contact';
import './Components.scss';

function Nesting() {
    return (
      <Router>
        <div>
          <ul className="reiter">
            <li>
              <Link to="/"><button>Home</button></Link>
            </li>
            <li>
              <Link to="/Contact"><button>Contact</button></Link>
            </li>
            <li>
              <Link to="/Profile/kitchen"><button>Profile</button></Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/Contact" render={() => <Contact />} />
            <Route exact path="/Profile/:title" render={(props) => <Profile {...props}/>} />
          </Switch>
        </div>
      </Router>
      
    );
  }

function Creo() {
    return (
        <>
            <Title className="ABOUT CREO"></Title>
                <img className="aboutCreo" src="https://blog.creokorea.com//uploads/j_ae3930b51e.png" alt="ABOUT CREO"/>         
            <Title name = "크레오코리아 푸드테크 솔루션의 미래"/>
                <p>음식폐기물을 처리한 결과물을 비료/바이오 연료 등으로 재활용</p>
                <p>[자원&에너지 순환형 푸드테크 체인] 완성</p>
                <img className="foodTech" src=" " alt="FOOD TECH"/>
                <Nesting />
        </>
    );
};

export default Creo;