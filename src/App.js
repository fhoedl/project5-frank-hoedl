import React, { Component }from 'react';
// Styling
import './App.scss';
// Packages
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// Imports
import BackgroundElements from "./BackgroundElements";
import MainPg from "./MainPg";
import LandingPg from './LandingPg';


class App extends Component {

  render() {
    return (

      <Router basename="/project5-frank-hoedl">
          <div className="background">
            <BackgroundElements />
            {/* <Switch>
              <Route path="/" exact component={MainPg}/>
              <Route path="/landing" component={LandingPg} />
            </Switch> */}
            <Switch>
              <Route path="/" exact component={MainPg}/>
              {/* <Route path="/landing" component={LandingPg} /> */}
            </Switch>
      </div>
      </Router>
    );
  }
}

export default App;