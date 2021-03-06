import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../../src/Pages/HomePage/homepage.js';

class App extends Component {

  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  };
}

export default App;