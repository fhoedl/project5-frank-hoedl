import React, { Component } from "react";
import images from "./images";
import './App.scss';

class BackgroundElements extends Component {
    render(){
        return (
            <div>
                <img src={images[0].iSRC} alt="Background Building" className="bkgdElements bkgd" aria-hidden="true"/>
                <img src={images[1].iSRC} alt="Background Building" className="bkgdElements mid" aria-hidden="true"/>
                <img src={images[2].iSRC} alt="Background Building" className="bkgdElements fore" aria-hidden="true"/>
            </div>
        )
    }
}

export default BackgroundElements;