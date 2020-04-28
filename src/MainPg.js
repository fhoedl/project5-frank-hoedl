import React, { Component } from "react";
import InputField from "./InputField";
import weatherIcons from "./weatherIcons";
import WeatherData from "./WeatherData";

class MainPg extends Component {

    render(){

        return(
            <div>
                <h4>forecast</h4>

                <div className="svgContainer">
                    <img src={weatherIcons[1].iSRC} alt="" srcset="" className="wIcons"/>
                </div>
                <InputField />

                <WeatherData />
            </div>
        )
    }
}

export default MainPg;