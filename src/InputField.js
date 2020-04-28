import React, { Component } from "react";


class InputField extends Component {
    constructor(){
        super();
        this.state = {
            userInput: ''
        }
    }

    // componentDidMount(){
    //     axios({
    //         url: '',
    //         method: 'GET',
    //         responseType: 'json',
    //         params: {
    //             key:
    //         }

    //     })
    // }

    // event.target.value ( what user is typing ) put it into the this.state.userInput
    handleUserInput = (event) => {
        this.setState({
            userInput: event.target.value
        })
        // console.log(this.state.userInput)
    }

    // on submit, clears input field, error message if empty
    handleSubmit = (e) => {
        // console.log(this.state.userInput)
        e.preventDefault();
        this.state.userInput !== ''?  this.setState({ userInput: ''})  : alert(`Please enter Location`)
    }

    render(){ 
  
        return(
                <form onSubmit={this.handleSubmit} className="locateWSubmit">
                    {/* Input Field */}
                    <input type="text" id="locateInput" value={this.state.userInput} placeholder="enter your location" className="locateField" onChange={this.handleUserInput}/> 
                    {/* Submit Button */}
                    <input type="submit" value="Submit" className="locateField"/>
                </form>  
        )
    }

}

export default InputField; 