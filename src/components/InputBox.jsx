import React from "react";

class FormsAndInputs {
    handleSubmit = (event) => {
        event.preventDefaul()
    }

    handleInputChange = () => {

    }
    render () {
        return (
            <div>
                <h1>Forms and Inputs</h1>
                <form method='POST' onSubmit={this.handleSubmit}>
                    <p><input type='text' placeholder='type...' name='word' /></p>
                    <p><button>type in a word: </button></p>
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

