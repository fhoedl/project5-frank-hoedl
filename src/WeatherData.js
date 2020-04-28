import React, { Component } from "react";


class WeatherData extends Component {
    constructor(){
        super();
        this.state = {
            apiDataReturned: true
        }
    }

    render() {

        return (
            <div>
                {this.state.apiDataReturned ? <p>Weather data goes here</p> : null} 
            </div>
        )
    }

}

export default WeatherData;