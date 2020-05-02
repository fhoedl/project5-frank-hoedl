import React, { Component } from "react";
import WeatherData from "./WeatherData";
// import './App.scss';

class MainPg extends Component {

    render(){

        return(
            <main className="mainContainer wrapper">

                <section className="header">
                    <h4>forecaster</h4>
                </section>

                <section className="dataContainer">
                    <WeatherData />
                </section>
                            
            </main>
        )
    }
}

export default MainPg;