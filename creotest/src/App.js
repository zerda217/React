import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import { Home, About, Creo, Works, Careers, Contact } from './components';
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
      <div className="Main">
        <hr/>
            <Route exact path="/" component={Home} />
            <Route path="/components/About" component={About} />
            <Route path="/components/Creo" component={Creo} />
            <Route path="/components/Works" component={Works} />
            <Route path="/components/Careers" component={Careers} />
            <Route path="/components/Contact" component={Contact} />
      </div>
    <Footer/>
    </div>   
  );
}

export default App;
