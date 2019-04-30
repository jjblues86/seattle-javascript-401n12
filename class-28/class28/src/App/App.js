import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';

export default class App extends React.Component {
  render() {
    return(
        <main>
          <BrowserRouter>
            <nav>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
              </ul>
            </nav>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/home" component={Home}/>
          </BrowserRouter>
        </main>
    );
  }
}

