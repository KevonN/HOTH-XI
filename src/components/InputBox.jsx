// InputBox.jsx
import React, { Component } from "react";

import './InputBox.css'

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
            const updatedWordList = [word.trim(), ...wordList];
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
                <form id='userForm' onSubmit={this.handleSubmit}>
                    <input
                        id='userInputForm'
                        placeholder='type...'
                        value={word}
                        onChange={this.handleInputChange}
                        name='word'
                    />
                    <button id='submitButton' type="submit">Enter!</button>
                </form>
            </div>
        );
    }
}

export default FormsAndInputs;
