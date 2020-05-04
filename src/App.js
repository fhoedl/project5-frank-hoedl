import React, { Component }from 'react';
// Styling
import './App.scss';
// Imports
import BackgroundElements from "./BackgroundElements";
import MainPg from "./MainPg";


class App extends Component {

  render() {
    return (
              <div className="background">
                  <BackgroundElements />
                  <MainPg />
              </div>
    );
  }
}

export default App;