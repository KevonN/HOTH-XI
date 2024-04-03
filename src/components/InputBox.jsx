// InputBox.jsx
import React, { Component } from "react";
import './InputBox.css'

class FormsAndInputs extends Component {
    state = {
        word: '',
        wordList: [],
        errorMessage: '',
        score: 0,
        enteredWords: new Set()
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { word, wordList, enteredWords } = this.state;
        const { scrambledWord } = this.props;

        // Basic validation - check if the word is not empty and doesn't contain invalid characters
        const isValidWord = await this.checkWordValidity(word.trim(), scrambledWord);
        if (isValidWord && !enteredWords.has(word.trim())) {
            const updatedWordList = [word.trim(), ...wordList];
            const points = word.trim().length * 5;
            const updatedScore = this.state.score + points;
            this.setState({ 
                errorMessage: '',
                wordList: updatedWordList, 
                word: '',
                score: updatedScore,
                enteredWords: new Set([...enteredWords, word.trim()]) // Add the word to the set of entered words
            }, () => {
                this.props.onWordsChange(updatedWordList);
                this.props.onScoreChange(updatedScore);
            });
        } else if (enteredWords.has(word.trim())) { // If word is already entered, show error message
            this.setState({ errorMessage: 'Word already entered! Please enter a new word.' });
        } else {
            this.setState({ errorMessage: 'Invalid word! Please enter a valid word.' });
        }
    };

    checkWordValidity = async (word, scrambledWord) => {
        // Check if each letter of the entered word exists in the scrambled word
        const letterCount = new Map(); // Map to store letter counts in the scrambled word
        for (const letter of scrambledWord) {
            letterCount.set(letter, (letterCount.get(letter) || 0) + 1);
        }
        // Check if each letter of the entered word exists in the scrambled word
        for (const letter of word) {
            if (!scrambledWord.includes(letter) || (letterCount.get(letter) || 0) === 0) {
                console.log(word);
                return false;
            }
            letterCount.set(letter, letterCount.get(letter) - 1); // Decrease the count of the letter
        }

        try {
            const response = await fetch('src/components/game/dictionary.csv');
            const csvText = await response.text();
            const dictionary = csvText.split(/\r?\n/);
            return dictionary.includes(word);
        } catch (error) {
            console.error('Error checking word validity:', error);
            return false; // Assume word is invalid in case of error
        }
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    render() {
        const { word, errorMessage } = this.state;
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
                {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Render error message if present */}
            </div>
        );
    }
}

export default FormsAndInputs;
