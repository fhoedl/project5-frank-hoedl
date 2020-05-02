import React, { Component } from "react";

class InputField extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
        }
    }

    // Get USER INPUT...
    handleUserInput = (e) => {
        this.setState({ userInput: e.target.value } 
    )}

    // PASS USER INPUT to WeatherData.js, ERROR Handled
    handleSubmit = (e) => {
        e.preventDefault();
        this.state.userInput !== ''
            ? this.setState({ userInput: ''}) 
            : alert(`Please enter Location`)
        this.props.searchInput(e, this.state.userInput)
    }

    // is called in MainPg amd LandingPg
    render(){ 
        return(
            <form  className="locateWSubmit">
                <input onChange={this.handleUserInput} type="text" id="locateInput" value={this.state.userInput} placeholder="New Search" className="locateField"/> 
                <input onClick={this.handleSubmit} type="submit" value="Submit" className="locateField" />
            </form>
        )
    }

}

export default InputField; 