import React, { Component } from 'react';
import axios from 'axios';

class Geolocation extends Component {
    constructor (){
        super();
        this.state = {
            userInput: '', //remains blank currently
            newSearchInput: '',
            searchedFor: '',
            newLat: '',
            newLon: '',
            mapApiResult: []
        }
    }

    // componentDidMount(newLocation) {
    componentDidMount() {
        axios({
            url: 'http://www.mapquestapi.com/geocoding/v1/address',
            method: 'GET',
            responseType: 'json',
            params: {
                key: 'srnbJxPHaOsssQrGNwDmj2K6n47ObSRq',
                location: 'Toronto, ON'
            }

        })
            .then((results) => {
                this.setState({
                    mapApiResult: results,
                    newLat: results.data.results[0].locations[0].latLng.lat,
                    newLon: results.data.results[0].locations[0].latLng.lng
                })
                console.log(this.state.mapApiResult, this.state.newLat, this.state.newLon)
            })
    }
  

    // React handleSubmit()
    handleSubmit(e){
        e.preventDefault()
        alert('Button Click working')
    };

     render(){

        return(
            <div className="geoLocateLink">
                {/* Geo-location */}    
                {/* <input type="button" value="...use your current location" className="locateField geoLocationField" onClick={this.handleSubmit} /> */}
                <input type="button" value="...use your current location" className="locateField geoLocationField" onClick={this.handleSubmit} />
            </div>            
        )
     }

}

export default Geolocation;