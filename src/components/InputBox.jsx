import React, { Component } from "react";

class FormsAndInputs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            word: ''
        }
        this.inputRef = React.createRef()
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClearClick = (event) => {
        console.log(this.inputRef.current.value)
        this.setState({
            word: ''
        })
    }

    render () {
        const {word} = this.state
        return (
            <div>
                <p>input is: {word}</p>
                <form onSubmit={this.handleSubmit}>
                    <p><input ref={this.inputRef} placeholder='type...' value={word} onChange={this.handleInputChange} name='word' /></p>
                    <p><button onClick={this.handleClearClick}>enter!</button></p>
                </form>
            </div>
        )
    }
}

// function InputBox (props) {

//     return (
//         <p>
//             <input type='word' value={props.value} name={props.name} ref={props.ref} />
//         </p>
//     )
// }

export default FormsAndInputs;

