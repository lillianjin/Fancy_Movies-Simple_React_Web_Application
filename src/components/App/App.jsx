import React, { Component } from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
// import history from './history';

// Include your new Components here
import Home from '../Home/Home.jsx';
import List from '../List/List.jsx';
import Details from '../Details/Details.jsx';
import Details0 from '../Details/Details0.jsx';

class App extends Component {
  render() {
    return (
      <div id="root">
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/list" component={List}/>
            <Route path="/details/:index" component={Details}/>
            <Route path="/details0/:index" component={Details0}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
