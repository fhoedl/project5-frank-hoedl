import React, { Component }from 'react';
// Imports
import BackgroundElements from "./BackgroundElements";
import LandingPg from "./LandingPg";
import MainPg from "./MainPg";
// Styling
import './App.scss';




class App extends Component {

  render() {

    return (
      <div className="background">
        <BackgroundElements />
        {/* <LandingPg /> */}
        <MainPg />
      </div>
    );

  } 
}


export default App;