import React from 'react'
import ReactDOM from "react-dom";
import { useState, useEffect } from 'react'

function Modal ({visible, hide, playerNumber}) {

    const MIN = 1
    const MAX = 100
    const [randomNumber, setRandomNumber] = useState(null)

    useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * (MAX - MIN + 1) + MIN))
    }, [setRandomNumber])

    return(
        visible 
        ? ReactDOM.createPortal(
            <>
                <div className="modal-overlay">
                    <div className="modal-wrapper">
                        <div className="modal">
                            <h2 className='modal-title'>Fight</h2>
                            <div className='modal-content'>
                                <p>Your number {playerNumber} - <b>VS</b> - {randomNumber} Computer number</p>
                                <p>
                                    {playerNumber === randomNumber ? "EQUALITY" : 
                                        playerNumber > randomNumber ? "YOU WIN" : "YOU LOSE"
                                    }
                                </p>
                            </div>
                            <button onClick={hide}>Close</button>
                        </div>
                    </div>
                </div>
            </>,
            document.body
        )
        : null

    )
}

export default Modal