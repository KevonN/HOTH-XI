/*import React, { Component } from "react";

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
                <p>Input is: {word}</p>
                <form onSubmit={this.handleSubmit}>
                    <p><input ref={this.inputRef} placeholder='type...' value={word} onChange={this.handleInputChange} name='word' /></p>
                    <p><button onClick={this.handleClearClick}>Enter!</button></p>
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

export default FormsAndInputs; */

// InputBox.jsx
import React, { Component } from "react";

class FormsAndInputs extends Component {
    state = {
        word: '',
        wordList: []
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { word, wordList } = this.state;
        // Basic validation - assuming valid word
        if (word.trim() !== '') {
            const updatedWordList = [...wordList, word.trim()];
            this.setState({ wordList: updatedWordList, word: '' }, () => {
                this.props.onWordsChange(updatedWordList);
            });
        }
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const { word } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder='type...'
                        value={word}
                        onChange={this.handleInputChange}
                        name='word'
                    />
                    <button type="submit">Enter!</button>
                </form>
            </div>
        );
    }
}

export default FormsAndInputs;
