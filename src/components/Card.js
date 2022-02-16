import React from 'react'
import Button from './Button'
import Modal from './Modal'
import { useState, useEffect } from 'react'



function Card(){

    const MIN = 1
    const MAX = 100

    const [showModal, setShowModal] = useState(false)
    const [randomNumber, setRandomNumber] = useState(null)

    useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * (MAX - MIN + 1) + MIN))
    }, [setRandomNumber])

    const toggle = () => {
        setShowModal(!showModal)
    }
    const hideModal = () => {
        setShowModal(false)
    }
    return(
        <div className='card'>
            <h2 className='card-title'>Your Number</h2>
            <p data-testid="card-content" className='card-content'>{randomNumber ? randomNumber : "loading"}</p>
            <Button onClick={toggle}/>
            <Modal visible={showModal} hide={hideModal} playerNumber={randomNumber}/>
        </div>
    )
}

export default Card
