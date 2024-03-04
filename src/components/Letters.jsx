import React from "react";

import './Letters.css'

function Letter (character) {

    return (
        <div>
            <button id='letterButton'><span>{character.ind}</span></button>
        </div>
    )

}

export default Letter;
