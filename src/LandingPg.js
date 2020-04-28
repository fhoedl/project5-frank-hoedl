import React, { Component } from "react";
import InputField from "./InputField";
import GeoLocation from "./GeoLocation";

class LandingPg extends Component {

    render() {
        
        return (
             <div className="App">
                  <h1>forecaster</h1>
                  <h2>a weather app</h2>
                  <InputField />
                  <GeoLocation /> 
             </div>             
        )
    }

}


export default LandingPg;