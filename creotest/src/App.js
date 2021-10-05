import React from 'react';
import { Provider } from './context';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { Home, Creo, Team, Works, Careers, Contact } from './components';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer';

const App = () => {

  return (
    <Provider>
    <div className="creo">
      <div className="body">
        <Navbar/>
      <div className="wrap">
        <div className="Main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Creo" component={Creo} />
            <Route path="/Team" component={Team} />
            <Route path="/Works" component={Works} />
            <Route path="/Careers" component={Careers} />
            <Route path="/Contact" component={Contact} />
            <Route path="/"> Not Found </Route>
          </Switch>
        </div>
      </div>
      <Footer/>
    </div>
  </div>
  </Provider> 
  );
}

export default App;