import React, { Component } from "react";
import axios from 'axios';
import images from "./images";
import InputField from './InputField';
// import './App.scss';

class WeatherData extends Component {
    constructor(){
        super();
        this.state = {
            // from INPUT
            newSearch: 'Toronto',

            // from MAP API
            newLat: '',
            newLon: '',
            mapApiResult: [],

            // Weather API, required for return
            keys: '1b5614554d2203c32690e03daee17bfb',
            units: `metric`, //Default, OPTION to change

            // storing Data to be distributed by RETURN...
            weather: [],
            currentTemp: [],
            currentTempFeelLIke: [],
            currentCond: [],

            weatherTomorrow: [], // stretch goals
            weatherIn2Days: [] // stretch goals
        }
    }

    componentDidMount() {
       this.search();
    }
        
    search = () => {
        // Geolocation Call
        axios({
            url: 'https://www.mapquestapi.com/geocoding/v1/address',
            method: 'GET',
            responseType: 'json',
            params: {
                key: 'srnbJxPHaOsssQrGNwDmj2K6n47ObSRq',
                location: this.state.newSearch
            }})
            .then((results) => {
                this.setState({
                    mapApiResult: results,
                    newLat: results.data.results[0].locations[0].latLng.lat,
                    newLon: results.data.results[0].locations[0].latLng.lng
                })
                weatherCall();
            })

        // API Weather Call... Called from within GEo Location call...
        const weatherCall =() =>{
            axios({
                url: `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.newLat}&lon=${this.state.newLon}&units=${this.state.units}&appid=${this.state.keys}`,
                method: 'GET',
                responseType: 'json'
                })
                .then((response) => { 
                    const { daily, hourly } = response.data // Destructured
                    // Returned Data ...settingSate
                    this.setState({
                        weather: daily[0],
                        currentTemp: (hourly[0].temp).toFixed(0),
                        currentTempFeelLIke: (hourly[0].feels_like).toFixed(0),
                        currentCond: daily[0].weather[0].description,
                        weatherTomorrow: daily[1], // Stretch...
                        weatherIn2Days: daily[2], // Stretch...
                    })
                })
        }
    }     
   
    // Incoming USER Search from Input.js, using Props
    searchFor = (e, searchReq) =>{
        e.preventDefault();
        this.setState({ newSearch: searchReq },this.search);
    }

    // render, OUTGOING to MainPg.js
    render() {   
        return (
            <>
                <h3>
                    <span className="visHidden"></span>
                    {this.state.currentTemp}
                    <span>°</span>
                </h3>

                <div className="conditionsContainer">
                    <img src={images[3].iSrc} alt={images[3].iAlt} className="wIcons" />
                    <h5><span>...</span> {this.state.currentCond}</h5>
                </div>
                
                <section className="locationContainer">
                    <h2 className="selectedLocale">
                        {this.state.newSearch}
                    </h2>
                    <div className="inputContainer">
                        <InputField searchInput={this.searchFor}/>
                    </div>
                </section>
            </>
        )
    }
}

export default WeatherData;
