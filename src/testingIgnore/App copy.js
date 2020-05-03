import React, { Component }from 'react';
// Styling
import './App.scss';
// Imports
import BackgroundElements from "../BackgroundElements";
import MainPg from "../MainPg";
import LandingPg from './LandingPg';
// Packages
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {

  render() {
    return (
         <Router basename={process.env.PUBLIC_URL + "/"}>
              <div className="background">
                   <BackgroundElements />
                   <Switch>
                    <Route path='/' exact component={LandingPg} />
                    <Route path='/main' component={MainPg}/>
                  </Switch>
              </div>
         </Router>
    );
  }
}

export default App;