import React from "react";

import './Letters.css'

function Letter (character) {

    return (
        <div>
            <button>{character.ind}</button>
        </div>
    )

}

export default Letter;