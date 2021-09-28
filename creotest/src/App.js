import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { Home, Creo, Team, Works, Careers, Contact2 } from './components';
import Navbar2 from './components/Nav/Navbar2';
import Footer from './components/Footer';
// import Button from './components/Button';


const App = () => {

  return (
    <div className="creo">
      <div className="body">
      <div className="wrap">
        <Navbar2/>
        <div className="Main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/components/Creo" component={Creo} />
            <Route path="/components/Team" component={Team} />
            <Route path="/components/Works" component={Works} />
            <Route path="/components/Careers" component={Careers} />
            <Route path="/components/Contact2" component={Contact2} />
            <Route path="/"> Not Found </Route>
          </Switch>
        </div>
      <Footer/>
      </div>
    </div>
  </div>   
  );
}

export default App;