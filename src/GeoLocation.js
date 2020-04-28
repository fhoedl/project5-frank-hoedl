import React, { Component } from 'react';


class Geolocation extends Component {

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