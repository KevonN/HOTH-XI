

import './gameControls.css'


import React from "react";

function Controls (character) {

    return (
        <div>
            <p id='dataTitle'>{character.title}</p>
            <h3 id='dataInfo'>{character.info}</h3>
        </div>
    )

}

export default Controls;