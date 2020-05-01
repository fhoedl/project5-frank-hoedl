import React, { Component } from "react";
// import InputField from "./InputField";
import WeatherData from "./WeatherData";
import './App.scss';

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
                
                {/* <section className="locationContainer">
                    <h2 className="selectedLocale">
                        Toronto 

                    </h2>
                    <div className="inputContainer">
                        <InputField />
                    </div>  
                </section> */}
            
            </main>
        )
    }
}

export default MainPg;