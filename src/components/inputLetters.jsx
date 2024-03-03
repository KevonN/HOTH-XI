import React from "react";

import './inputLetters.css'

function InputLetter (character) {

    return (
        <div>
            <p id = 'inputLetterButton'>{character.ind}</p>
        </div>
    )

}

export default InputLetter;
