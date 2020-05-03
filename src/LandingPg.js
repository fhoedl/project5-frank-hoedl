import React, { Component } from "react";
import InputField from "./InputField";
// import { BrowserRouter as Router,Route,Link} from "react-router-dom";
import GeoLocation from "./GeoLocation";
import MainPg from "./MainPg";
import './App.scss'

class LandingPg extends Component {

    formStyle = {
        gridColumn: '1 / -1',  
        gridRow: '6 / 8',
        minWidth: '250px',
    }

    render() {

        return (

                <div className="landingContainer wrapper">
                    <h1>forecaster</h1>
                    <h2>a weather app</h2>
                    <div style={this.formStyle} >
                        <InputField className="lpInputs"/>
                    </div>
                    {/* <Link to='/main'>
                        <p>link to main</p>
                    </Link>
                    <Route path='/main' component={MainPg}/> */}
                    <GeoLocation className="lpGeoLocate" />
                </div>

        );
    }
}


export default LandingPg;