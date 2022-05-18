import React from 'react';
import './Form.css';

function Form(blanks, handleUserInput, userInput, handleSubmit) {
     
    return (
        <div>
            <form>
                <input type='text' placeholder={blanks}/>
                <input type='submit' value='submit' />
            </form>
        </div>
    )
}

export default Form;