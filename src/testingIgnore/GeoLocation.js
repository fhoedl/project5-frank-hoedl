import React, { Component } from 'react';
// import axios from 'axios';

class Geolocation extends Component {
    constructor (){
        super();
        this.state = {
            newCall: false,
            newLat: '',
       
        }
    }

    // componentDidMount(newLocation) {
    componentDidMount() {
        if (navigator.geolocation) {
            console.log('good to go');
            // this.geoLocate();
            
            // navigator.geolocation.getCurrentPosition(this.geoLocate);
        } else {
            console.log('oops not connected')
        }
        // this.newCall === true 
        //     ? this.geoLocate() 
        //     :console.log('not geo located')
        // this.geoLocate();
    }
    // geoLocate(position) {
    //     const lng = position.coords.longitude;
    //     const lat = position.coords.latitude;

    //     console.log(`longitude: ${lng} | latitude: ${lat}`);
    // }



    geoLocate = () => {
        navigator.geolocation.getCurrentPosition( function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            this.setState({
                newLat: position.coords.latitude,
                newLon: position.coords.longitude
            })
        });
    }

    //     axios({
    //         url: 'http://www.mapquestapi.com/geocoding/v1/address',
    //         method: 'GET',
    //         responseType: 'json',
    //         params: {
    //             key: 'srnbJxPHaOsssQrGNwDmj2K6n47ObSRq',
    //             location: 'Toronto, ON'
    //         }

    //     })
    //         .then((results) => {
    //             this.setState({
    //                 mapApiResult: results,
    //                 newLat: results.data.results[0].locations[0].latLng.lat,
    //                 newLon: results.data.results[0].locations[0].latLng.lng
    //             })
    //             console.log(this.state.mapApiResult, this.state.newLat, this.state.newLon)
    //         })
    // }



    // React handleSubmit()
    handleSubmit = (e) => {
        e.preventDefault(); 
        this.setState({
            newCall: true
        });
        alert('button working');
    }

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