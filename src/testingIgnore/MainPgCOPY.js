import React, { Component } from "react";
// import BackgroundElements from "./BackgroundElements";
import WeatherData from "./WeatherData";
// import GeoLocation from "./GeoLocation";
import { BrowserRouter as Router } from 'react-router-dom';

class MainPg extends Component {

    reStyling = {
        gridColumn: '1 / -1',
        gridRow:  '1/ -1'
    }

    render(){

        return (
             <Router basename={process.env.PUBLIC_URL}>
                  <div style={this.reStyling}>
                       {/* <BackgroundElements /> */}
                       <main className="mainContainer wrapper">
                            <section className="header">
                                 <h4>forecaster</h4>
                            </section>

                            <WeatherData />
                            {/* <GeoLocation className="lpGeoLocate" /> */}
                       </main>
                  </div>
            </Router>
        );
    }
}

export default MainPg;