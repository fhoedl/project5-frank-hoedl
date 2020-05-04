import React, { Component } from "react"; 
import WeatherData from "./WeatherData";
import './App.scss';
// import GeoLocation from "./GeoLocation";

class MainPg extends Component {

    reStyling = {
        gridColumn: '1 / -1',
        gridRow:  '1/ -1'
    }

    render(){

        return (
                  <div style={this.reStyling}>
                       <div className="mainContainer wrapper">
                           <header>
                               <h1>forecaster</h1>
                               <h2>a weather app</h2>
                           </header>
                            
                            <WeatherData />
                       </div>
                  </div>

        );
    }
}

export default MainPg;