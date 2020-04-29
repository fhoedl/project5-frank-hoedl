import React, { Component } from "react";
import axios from 'axios';


class WeatherData extends Component {
    constructor(){
        super();
        this.state = {
            // weather: true
            key: '1b5614554d2203c32690e03daee17bfb',
            lat: '60.99',
            lon: '30.9',
            // q: 'London',
            weather: []
        }
        console.log(this.state.weather)
    }

    componentDidMount() {
            axios({
                url: `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lon}&appid=${this.state.key}`,
                // url: `https://api.openweathermap.org/data/2.5/weather?q=${this.state.q}&appid=${this.state.key}`,
                method: 'GET',
                responseType: 'json',
                // params: {
                //     // key: '1b5614554d2203c32690e03daee17bfb'
                //     // lat: '60.99',
                //     // lon: '30.9'
                // }
            })
                .then((response) => { 
                    this.setState({
                        weather: response.data.daily[0].weather
                        // weather: response.data.weather
                    })
                    console.log(this.state.weather)
                })
        }

        

    render() {

        return (
            <div> 
                {this.state.weather ? <p>Weather data goes here</p> : null} 
            </div>
        )
    }

}

export default WeatherData;