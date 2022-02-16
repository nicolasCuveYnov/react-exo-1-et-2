import React from 'react'

function Button({onClick}){
    return(
        <button name="showResult" onClick={onClick}>Show computer's number</button>
    )
}

export default Button