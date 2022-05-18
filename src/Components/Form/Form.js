import {useState} from 'react';
import './Form.css';


function Form ({blanks, userInput, handleUserInput}) {

     let blankForm = blanks.map ((input, index)=> {
         return (
             <input type='text' placeholder={input} />
         )
     })

    return (
        <div>
            <form>
                {blankForm}
            </form>
        </div>
    )
}

export default Form;
