import React, { Component } from "react";
import InputField from "./InputField";
import GeoLocation from "./GeoLocation";
import './App.scss'

class LandingPg extends Component {

    formStyle = {
        gridColumn: '1 / -1',  
        gridRow: '6 / 8',
        minWidth: '250px',
    }

    render() {

        return (
             <div className="landingContainer">
                <h1>forecaster</h1>
                <h2>a weather app</h2>
                <div style={this.formStyle} >
                    <InputField className="lpInputs"/>
                </div>
                <GeoLocation className="lpGeoLocate"/> 
             </div>             
        )
    }
}


export default LandingPg;