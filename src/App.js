import React, { Component }from 'react';
// Styling
import './App.scss';
// Packages //...added
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; //...added
// Imports
import BackgroundElements from "./BackgroundElements";
// import LandingPg from "./LandingPg";
import MainPg from "./MainPg";


class App extends Component {

  render() {
    return (
      // <Router basename="/project5-frank-hoedl">
      <Router basename="/project5-frank-hoedl">
        <div className="background">
          <BackgroundElements />
          <Switch>
            <Route path="/" exact component={MainPg}/>
            {/* <Route path="/landing" component={LandingPg} /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

//   render() {
//     return (
//         <div className="background">
//           <BackgroundElements />
//           {/* <LandingPg /> */}
//           <MainPg />
//         </div>
//     )
//   } 
// }


export default App;