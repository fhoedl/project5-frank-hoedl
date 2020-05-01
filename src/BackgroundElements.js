import React, { Component } from "react";
import images from "./images";
import './App.scss';


class BackgroundElements extends Component {

    render(){
        return (
            <div>
                <img src={images[0].iSRC} alt="Background Building" className="bkgdElements bkgd" />
                <img src={images[1].iSRC} alt="Background Building" className="bkgdElements mid" />
                <img src={images[2].iSRC} alt="Background Building" className="bkgdElements fore" />
            </div>
        )
    }



}

export default BackgroundElements;