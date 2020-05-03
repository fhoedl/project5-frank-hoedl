import React, { Component } from "react";
import InputField from "./InputField";
// import BackgroundElements from "./BackgroundElements";
import GeoLocation from "./GeoLocation";
import MainPg from "./MainPg";
import './App.scss'
import { BrowserRouter as Router,Route,Link} from "react-router-dom";

class LandingPg extends Component {

    button = {
        gridColumn: '1 / -1',  
        gridRow: '6 / 8',
        minWidth: '250px',
    }

    // activeButton ={
    //     backgroundColor: 'blue'
    // }

    render() {

        return (
             <Router
                //   basename={process.env.PUBLIC_URL+'/'} 
                  forceRefresh={true}
                  >
                  <div>
                       {/* <BackgroundElements /> */}
                       <div className="landingContainer wrapper">
                            <h1>forecaster</h1>
                            <h2>a weather app</h2>
                            <Link style={this.button} to='/main'>
                                 <button type="submit">Continue</button>
                            </Link>
                            <Route path='/main' component={MainPg} />
                            <GeoLocation className="lpGeoLocate" />
                       </div>
                  </div>
             </Router>
        );
    }
}


export default LandingPg;