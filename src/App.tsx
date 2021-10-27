import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import './App.css';
import logo from './assets/company-logo.svg';
import HomeComponent from './home/home.component';
import AboutComponent from './about/about.component';

class App extends React.Component {

  render() {
    return <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <div className="App-logo-box">
            <img src={logo} className="App-logo" alt="My Company" />
          </div>
          <div className="App-nav-box">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="App-content">
          <Switch>
              <Route path="/about">
                <AboutComponent />
              </Route>
              <Route path="/">
                <HomeComponent name="Dennis" />
              </Route>
            </Switch>
        </div>
        <footer className="App-footer">
          The footer
        </footer>
      </BrowserRouter>
    </div>;
  }
}

export default App;
