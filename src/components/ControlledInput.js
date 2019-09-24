import React, {Component} from 'react'

export default class ControlledInput extends Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
    }
    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
        
    }

    handleLastNameChange = event => {
        event.persist()
        this.setState({
            lastName: event.target.value
        })
    }


    render(){
        return(
            <div>
                <form>
                    <label>First Name:</label>
                    <input type="text" onChange={this.handleFirstNameChange} value={this.state.firstName} /><br />
                    <label>Last Name:</label>
                    <input type="text" onChange={this.handleLastNameChange} value={this.state.lastName} />
                </form>
            </div>
        )
    }
}